import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import {UserModule} from "./user/user.module";



@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ],
  exports: [
  ]
})
export class FeatureModule { }
