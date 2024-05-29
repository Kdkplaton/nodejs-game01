import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authMiddleware from '../middlewares/auth.middleware.js';
import { prisma_char as prisma } from '../utils/prisma/charClient.js';
import { Prisma } from '../../prisma/charactersClient/index.js';
import dotEnv from 'dotenv';

const router = express.Router();

// Token을 검증하고 Payload를 반환합니다.
function validateToken(token, secretKey) {
  try {
    const payload = jwt.verify(token, secretKey);
    return payload;
  } catch (error) {
    return null;
  }
}
function getIdbyAccessToken(req) {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
  return decoded.id;
}

// 캐릭터 생성 + 트랜잭션
router.post('/characters', async (req, res, next) => {
  try {
    // 생성할 캐릭터 이름 입력
    const { name } = req.body;

    // Access 토큰 검증
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      return res.send(400).json({ message: "AccessToken 없음. 로그인 하시오" });
    }
    const payload = validateToken(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
    if (!payload) {
      return res.send(400).json({ message: "AccessToken 만료. 다시 로그인 하시오" });
    }

    // 로그인한 사용자의 userId 추출
    const login_id = getIdbyAccessToken(req);

    // 이름 존재여부 확인
    const isExistUser = await prisma.characters.findFirst({
      where: {
        name,
      },
    });
    // 있으면 중복감지 에러
    if (isExistUser) {
      return res.status(409).json({ message: '이미 존재하는 이름입니다.' });
    }

    // 없으면 Characters 테이블에 캐릭터를 추가
    // MySQL과 연결된 Prisma 클라이언트를 통해 트랜잭션을 실행
    const [character] = await prisma.$transaction(async (tx) => {
      // 트랜잭션 내부에서 사용자를 생성
      const character = await tx.characters.create({
        data: {
          UserId: login_id,
          name: name,
          health: 100,    // 최초 HP:100
          strength: 10    // 최초 STR:10
        },
      });
      return [character];
    }, {
      isolationLevel: Prisma.TransactionIsolationLevel.ReadCommitted
    });
    return res.status(201).json({ message: '회원가입이 완료되었습니다.' });
  } catch (err) {
    next(err);
  }
});

// 로그인-사용자 캐릭터 전체조회
router.get('/characters', async (req, res, next) => {
  const login_id = getIdbyAccessToken(req);
  
  const users = await prisma.characters.findMany({
    where: { UserId: login_id },
    select: {
      UserId: true,
      name: true,
      health: true,
      strength: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  // 사용자 목록 반환
  return res.status(200).json({ data: users });
});

export default router;
