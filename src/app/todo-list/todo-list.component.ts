import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Itask } from '../interface/itask';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoArr: Itask[] = [];
  @Output() passEmitComplete = new EventEmitter();
  @Output() passEmitUndo = new EventEmitter();
  @Output() passEmitDelete = new EventEmitter();

  passComplateTask(id: number) {
    this.passEmitComplete.emit(id);
  }
  passUndoTask(id: number) {
    this.passEmitUndo.emit(id);
  }
  complatedTaskCounter() {
    const tasksCompleted: Itask[] = this.todoArr.filter(
      (task) => task.isCompleted
    );
    return tasksCompleted.length;
  }
  passDeleteTask(id: number) {
    this.passEmitDelete.emit(id);
  }
}
