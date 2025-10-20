import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import observationRoutes from './routes/observationRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/observations', observationRoutes);

export default app;
