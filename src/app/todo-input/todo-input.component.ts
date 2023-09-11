import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css'],
})
export class TodoInputComponent {

  todoText: string = '';
  alertError: Boolean = false;
  alertClose: Boolean = false;
  onAlertClosed() {
    this.alertClose = true;
  }
  inputChange() {
    this.alertError = true;
    this.alertClose = true;
  }
  @Output() emitTaskContent = new EventEmitter();
  sendToparent() {
    this.alertClose = false;
    this.alertError = false;
    if (this.todoText.length < 10) {
      this.alertError = true;
      return;
    }
    this.emitTaskContent.emit(this.todoText);
    this.todoText = '';
  }

  
}
