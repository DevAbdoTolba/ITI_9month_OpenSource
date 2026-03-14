import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: CreateTodoDto): import("./entities/todo.entity").Todo;
    findAll(): import("./entities/todo.entity").Todo[];
    findOne(id: number): import("./entities/todo.entity").Todo;
    update(id: number, updateTodoDto: UpdateTodoDto): import("./entities/todo.entity").Todo;
    remove(id: number): import("./entities/todo.entity").Todo[];
}
