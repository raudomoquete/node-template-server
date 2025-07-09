import dotenv from 'dotenv';
import { cleanEnv, str, port } from 'envalid';

dotenv.config();

export const envs = cleanEnv(process.env, {
    API_PREFIX: str({ default: '/api' }),
    PORT: port({ default: 3000 }),
});