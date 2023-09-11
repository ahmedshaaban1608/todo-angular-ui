import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
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
  constructor(private modalService: NgbModal) {}

  @Input() task: Itodo = {};
  @Output() emitCompleteTask = new EventEmitter();
  @Output() emitUndoTask = new EventEmitter();
  @Output() emitDeleteTask = new EventEmitter();

  taskcomplete() {
    this.emitCompleteTask.emit(this.task.id);
  }
  taskUndo() {
    this.emitUndoTask.emit(this.task.id);
  }
  openConfirmationModal() {
    const modalRef = this.modalService.open(DeleteConfirmComponent);
    modalRef.result.then(
      (result) => {
        if (result === 'confirm') {
          this.emitDeleteTask.emit(this.task.id);
        } else {
        }
      },
      (reason) => {}
    );
  }
}
