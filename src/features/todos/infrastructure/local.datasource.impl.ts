import { type TodoDataSource } from "../domain/datasources/datasource";
import { TodoEntity } from "../domain/entities/todo.entity";

const TODOS_MOCK = [
    {
        id: 1,
        text: 'First TODO...',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Second TODO...',
        isCompleted: false
    }
];

export class TodoDataSourceImpl implements TodoDataSource {
    public async getAll(): Promise<TodoEntity[]> {
        const todos = TODOS_MOCK.map((todo): TodoEntity => TodoEntity.fromJson(todo));
        return todos;
    }

    // rest of operations
    // ...
}