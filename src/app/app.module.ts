import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TodoContainerComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoItemComponent,
    FooterComponent,
    DeleteConfirmComponent,
  ],
  imports: [BrowserModule, NgbModule, FormsModule, NgbAlertModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
