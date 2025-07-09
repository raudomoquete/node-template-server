import { Router } from 'express';

import { TodoDataSourceImpl } from '../infrastructure/local.datasource.impl';
import { TodoRepositoryImpl } from '../infrastructure/repository.impl';
import { TodoController } from './controller';

export class TodoRoutes {
    static get routes(): Router {
        const router = Router();

        //* This datasource can be change
        const datasource = new TodoDataSourceImpl();
        const repository = new TodoRepositoryImpl(datasource);
        const controller = new TodoController(repository);

        router.get('/', controller.getAll);

        // rest of operations
        // ...
        
        return router;
    }
}