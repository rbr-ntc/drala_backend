import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';

dotenv.config();

export default registerAs('app', () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  cors: {
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:3000'],
  },
}));