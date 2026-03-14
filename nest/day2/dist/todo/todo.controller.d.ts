import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): Promise<import("./schemas/todo.schema").Todo>;
    findAll(): Promise<import("./schemas/todo.schema").Todo[]>;
    findOne(id: string): Promise<import("./schemas/todo.schema").Todo | null>;
    update(id: string, updateTodoDto: UpdateTodoDto): Promise<import("./schemas/todo.schema").Todo | null>;
    remove(id: string): Promise<import("./schemas/todo.schema").Todo | null>;
}
