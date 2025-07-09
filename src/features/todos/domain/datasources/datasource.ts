/* Data sources are interfaces or abstractions that represent the data source from which the data needed for the application is obtained. 
These data sources can be databases, web services, file systems, or any other form of data storage. */

import { type TodoEntity } from "../entities/todo.entity";

export abstract class TodoDataSource {
    abstract getAll(): Promise<TodoEntity[]>;

    //rest of operations
    // ...
}