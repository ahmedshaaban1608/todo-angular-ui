import { Component } from '@angular/core';
import { Itask } from '../interface/itask';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
})
export class TodoContainerComponent {
  todoList: Itask[] = [];
  receivedTaskContent(todo: string) {
    const task: Itask = {
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
  receivedTaskToDelete(id: number) {
    const afterDeleteArr = this.todoList.filter((task) => task.id !== id);
    this.todoList = afterDeleteArr;
  }
}
