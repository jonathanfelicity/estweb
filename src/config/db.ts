import { DataSource } from 'typeorm';
import { DB_HOST, DB_NAME, DB_PASS, DB_PORT, DB_TYPE, DB_USER } from './env';

const AppDataSource: DataSource = {
    type: DB_TYPE,
    database: DB_NAME,
    username: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    port: DB_PORT,
    entities: [
        __dirname + '../entities/*.ts'
    ],
    // synchronize: true,
    logging: false,
};

export default AppDataSource;
