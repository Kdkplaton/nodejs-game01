
import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middlewares/error-handler.middleware.js';
import dotEnv from 'dotenv';

import CharactersRouter from './routes/character_router.js';
import ItemsRouter from './routes/item_router.js';
import UsersRouter from './routes/users_router.js';

// .env의 있는 값들을 process.env 객체에 설정
dotEnv.config();

const app = express();
const PORT = 3102;

const router = express.Router();
router.get("/", (req, res) => {
  return res.json({ message: "Hello, There! : nodejs_adv" });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', [CharactersRouter,ItemsRouter,UsersRouter]);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
