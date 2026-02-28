import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  todos: Todo[] = [];
  create(createTodoDto: CreateTodoDto) {
    this.todos.push({ id: Date.now(), ...createTodoDto });
    return this.todos[this.todos.length - 1];
  }

  findAll() {
    return this.todos;
  }

  findOne(id: number) {
    const idx = this.todos.findIndex((todo) => todo.id === id);
    if (idx === -1) throw new NotFoundException(`Todo with ID ${id} not found`);
    return this.todos[idx];
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    const idx = this.todos.findIndex((todo) => todo.id === id);
    if (idx === -1) throw new NotFoundException(`Todo with ID ${id} not found`);
    this.todos[idx] = { ...this.todos[idx], ...updateTodoDto };
    return this.todos[idx];
  }

  remove(id: number) {
    const size1 = this.todos.length;
    this.todos = this.todos.filter((todo) => todo.id !== id);
    if (this.todos.length === size1)
      throw new NotFoundException(`Todo with ID ${id} not found`);
    return this.todos;
  }
}
