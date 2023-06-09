import express from 'express';
import authRouter from './routes/auth';
import roomRouter from './routes/room';
import categoryRouter from './routes/category';
import cors from 'cors';

import mongoose from 'mongoose';
const app = express();

// đăng ký middleware" giải mã dữ liệu json
app.use(express.json());
app.use(cors());
// router
app.use('/api', roomRouter);
app.use('/api', categoryRouter);
app.use('/api', authRouter);

mongoose.connect('mongodb://127.0.0.1:27017/Asmangular');

export const viteNodeApp = app;
