import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import authMiddleware from '../middlewares/auth.middleware.js';
import { prisma_char as prisma } from '../utils/prisma/charClient.js';
import { Prisma } from '../../prisma/charactersClient/index.js';
import dotEnv from 'dotenv';

const router = express.Router();

// 엑세스 토큰으로 로그인한 사용자의 userId 추출
function getIdbyAccessToken(req) {
  const accessToken = req.cookies.accessToken;
  const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET_KEY);
  return decoded.id;
}

// 캐릭터 생성 + 트랜잭션
router.post('/characters', authMiddleware, async (req, res, next) => {
  try {
    // 생성할 캐릭터 이름 입력
    const { name } = req.body;

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
          health: 500,    // 최초 HP:500
          power:  100     // 최초 STR:100
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
router.get('/characters', authMiddleware, async (req, res, next) => {
  // 로그인한 사용자의 userId 추출
  const login_id = getIdbyAccessToken(req);
  
  // 로그인한 사용자의 캐릭터 목록 조회
  const characters = await prisma.characters.findMany({
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

  // 캐릭터 목록 반환
  return res.status(200).json({ data: characters });
});

export default router;
