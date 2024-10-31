import { initMongo } from './db/initMongo.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMongo();
  startServer();
};

bootstrap();
