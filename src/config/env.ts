import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
    NODE_ENV,
    PORT,
    SECRET_KEY,
    LOG_FORMAT,
    LOG_DIR,
    ORIGIN,

    // DB
    DB_TYPE,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,

} = process.env;