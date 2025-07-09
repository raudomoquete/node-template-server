import { type TodoDataSource } from '../domain/datasources/datasource';
import { type TodoEntity } from '../domain/entities/todo.entity';
import { type TodoRepository } from '../domain/repositories/repository';

export class TodoRepositoryImpl implements TodoRepository {
    constructor(private readonly datasource: TodoDataSource) {}

    async getAll(): Promise<TodoEntity[]> {
        return await this.datasource.getAll();
    }

     // rest of operations
     // ...
}