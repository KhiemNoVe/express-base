import { DataSource } from 'typeorm';

export const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: ['src/entities/*.ts'],
  logging: true,
  synchronize: true,
});
