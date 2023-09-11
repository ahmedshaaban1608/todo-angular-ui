import { Component, EventEmitter, Input, Output } from '@angular/core';
interface Itodo {
  id?: number;
  text?: string;
  isCompleted?: Boolean;
}
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() task: Itodo = {};
  @Output() emitCompleteTask = new EventEmitter();
  @Output() emitUndoTask = new EventEmitter();

  taskcomplete() {
    this.emitCompleteTask.emit(this.task.id);
  }
  taskUndo() {
    this.emitUndoTask.emit(this.task.id);
  }
}
