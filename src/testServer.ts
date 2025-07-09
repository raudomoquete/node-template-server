import { envs } from './core/config/env';
import { AppRoutes } from './routes';
import { Server } from './server';

// This is a test server for testing purposes
export const testServer = new Server({
 port: envs.PORT,
 apiPrefix: envs.API_PREFIX,
 routes: AppRoutes.routes
});