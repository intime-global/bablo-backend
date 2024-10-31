import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';

export function startServer() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(pino({ transport: { target: 'pino-pretty' } }));
  app.get('*', (req, res) => {
    res.json({
      status: 200,
      message: 'Hello, world!',
    });
  });

  const PORT = Number(env('PORT', '3000'));

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
