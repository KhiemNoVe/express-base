import express from 'express';
import usersRouter from './routes/users';
import { myDataSource } from './database/dataSource';

export function createApp() {
  myDataSource
    .initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization:', err);
    });

  const app = express();

  app.use('/api/users', usersRouter);

  return app;
}
