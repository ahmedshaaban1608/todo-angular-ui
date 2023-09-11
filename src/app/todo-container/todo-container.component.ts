import { Component } from '@angular/core';

interface Itodo {
  id: number;
  text: string;
  isCompleted: Boolean;
}
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent {
  todoList: Itodo[] = [];
  receivedTaskContent(todo: string) {
    const task: Itodo = {
      id: this.todoList.length,
      text: todo,
      isCompleted: false,
    };
    this.todoList.push(task);
  }
  markAsComplete(id: number) {
    const taskIndex = this.todoList.findIndex((task) => task.id === id);
    this.todoList[taskIndex].isCompleted = true;
  }
  markAsUnComplete(id: number) {
    const taskIndex = this.todoList.findIndex((task) => task.id === id);
    this.todoList[taskIndex].isCompleted = false;
  }
}