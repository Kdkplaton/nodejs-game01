import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { prisma_char as prisma } from '../utils/prisma/charClient.js';
import { Prisma } from '../../prisma/charactersClient/index.js';
import dotEnv from 'dotenv';

dotEnv.config();
const router = express.Router();

// Refresh Token을 생성하는 함수 / 토큰 유효기간: 3일
function createRefreshToken(id) {
  const refreshToken = jwt.sign(
    { id: id },   // JWT 데이터
    `process.env.REFRESH_TOKEN_SECRET_KEY`,   // Refresh Token의 비밀 키
    { expiresIn: '7d' },
  );

  return refreshToken;
}
// Access Token을 생성하는 함수 / 토큰 유효기간: 3분
function createAccessToken(id) {
  const accessToken = jwt.sign(
    { id: id }, // JWT 데이터
    process.env.ACCESS_TOKEN_SECRET_KEY, // Access Token의 비밀 키
    { expiresIn: '3m' },
  );

  return accessToken;
}

// 사용자 회원가입 + Refresh 토큰 발급 + 트랜젝션
router.post('/users', async (req, res, next) => {
  try {
    // 생성할 아이디/비밀번호 입력
    const { id, password } = req.body;

    // 아이디 존재여부 확인
    const isExistUser = await prisma.users.findFirst({
      where: {
        id: id,
      },
    });
    // 있으면 중복감지 에러
    if (isExistUser) {
      return res.status(409).json({ message: '이미 존재하는 ID입니다.' });
    }

    // 없으면 Users 테이블에 사용자를 추가
    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행
    const [user, token] = await prisma.$transaction(async (tx) => {
      // 트랜잭션 내부에서 사용자를 생성
      const user = await tx.users.create({
        data: {
          id,
          password: hashedPassword    // 암호화된 비밀번호 저장
        },
      });
      // Refresh 토큰 생성
      const token = await tx.tokens.create({
        data: {
          UserId: user.userId,
          token: createRefreshToken(user.userId),
        },
      });
      return [user, token];
    }, {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted
    });
    return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
    next(err);
  }
});


// 로그인 + Access 토큰 발급
router.post('/log-in', async (req, res, next) => {
  try {
    const { id, password } = req.body;
    const user = await prisma.users.findFirst({ where: { id } });

    if (!user)
      return res.status(401).json({ message: '존재하지 않는 id(ID)입니다.' });
    // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
    else if (!(await bcrypt.compare(password, user.password)))
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

    // 로그인에 성공하면, 사용자의 userId를 바탕으로 토큰을 생성합니다.
    // Refresh 토큰 유효시, Access 토큰 생성
    const accessToken = createAccessToken(user.userId);
    res.cookie('accessToken', `Bearer ${accessToken}`); // Access Token을 Cookie에 전달한다.

    return res.status(200).json({ message: '로그인 성공' });
  } catch (err) {
    next(err);
  }
});


// 사용자 전체조회
router.get('/users', async (req, res, next) => {
  const users = await prisma.users.findMany({
    select: {
      userId: true,
      id: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // 사용자 목록 반환
  return res.status(200).json({ data: users });
});

// 사용자 지정조회
router.get('/user', async (req, res, next) => {
  // 조회대상 지정
  const { userId } = req.body;

  // 지정 레코드만 조회
  const user = await prisma.users.findFirst({
    where: { userId: +userId },
    select: {
      userId: true,
      id: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return res.status(200).json({ data: user });
});

// 사용자 삭제
router.delete('/users', async (req, res, next) => {
  const { id, password } = req.body;
  const user = await prisma.users.findFirst({ where: { id } });

  if (!user)
    return res.status(401).json({ message: '존재하지 않는 대상(id)입니다.' });
  // 입력받은 사용자의 비밀번호와 데이터베이스에 저장된 비밀번호를 비교합니다.
  else if (!(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });

  const findTarget = await prisma.tokens.findFirst({
    where: { UserId: user.userId },
  });

  if (!findTarget) {
    return res.status(400)
      .json({ errorMessage: '대상이 존재하지 않습니다.' });
  }

  // User 테이블과 연결된 Tokens의 데이터도 같이 삭제
  await prisma.users.delete({ where: { id: id }, });

  // 사용자 목록 반환
  return res.status(200).json({ message: "계정 삭제완료" });
});


export default router;
