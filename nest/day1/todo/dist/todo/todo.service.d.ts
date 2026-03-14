import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    todos: Todo[];
    create(createTodoDto: CreateTodoDto): Todo;
    findAll(): Todo[];
    findOne(id: number): Todo;
    update(id: number, updateTodoDto: UpdateTodoDto): Todo;
    remove(id: number): Todo[];
}
