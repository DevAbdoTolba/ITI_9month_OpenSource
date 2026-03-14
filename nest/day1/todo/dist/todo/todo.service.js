"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
let TodoService = class TodoService {
    todos = [];
    create(createTodoDto) {
        this.todos.push({ id: Date.now(), ...createTodoDto });
        return this.todos[this.todos.length - 1];
    }
    findAll() {
        return this.todos;
    }
    findOne(id) {
        const idx = this.todos.findIndex((todo) => todo.id === id);
        if (idx === -1)
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        return this.todos[idx];
    }
    update(id, updateTodoDto) {
        const idx = this.todos.findIndex((todo) => todo.id === id);
        if (idx === -1)
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        this.todos[idx] = { ...this.todos[idx], ...updateTodoDto };
        return this.todos[idx];
    }
    remove(id) {
        const size1 = this.todos.length;
        this.todos = this.todos.filter((todo) => todo.id !== id);
        if (this.todos.length === size1)
            throw new common_1.NotFoundException(`Todo with ID ${id} not found`);
        return this.todos;
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)()
], TodoService);
//# sourceMappingURL=todo.service.js.map