import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';

// TODO: properly manage routing for the application
@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
})
export class TodoListModule {}
