import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './database';

import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import homeRoutes from './routes/home';
import userRoutes from './routes/userRoutes';
import tokenRoutes from './routes/token';
import alunoRoutes from './routes/alunoRoutes';
import photosRoutes from './routes/photo';

const whitelist = [
  'http://localhost:3000',
];

const corsConfig = {
  origin(origin, callback) {
    let corsOptions;
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      // eslint-disable-next-line no-unused-vars
      corsOptions = { origin: true };
      callback(null, true);
    } else {
      // eslint-disable-next-line no-unused-vars
      corsOptions = { origin: false };
      callback(new Error('Cors'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.disable('x-powered-by');
    this.app.use(express.static(resolve(__dirname, 'src', 'uploads')));
    this.app.use(helmet());
    this.app.use(cors(corsConfig));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/token', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/photos/', photosRoutes);
  }
}

export default new App().app;
