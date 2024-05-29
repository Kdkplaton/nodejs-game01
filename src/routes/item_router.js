import express from 'express';
import authMiddleware from '../middlewares/auth.middleware.js';
import { prisma_item as prisma } from '../utils/prisma/itemClient.js';
import { Prisma } from '../../prisma/itemsClient/index.js';

const router = express.Router();



export default router;
