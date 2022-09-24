import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./shared/components/not-found/not-found.component";
import {LoginComponent} from "./features/user/login/login.component";
import {RegisterComponent} from "./features/user/register/register.component";
import {LoginGuard} from "./core/guards/login.guard";
import {LogoutGuard} from "./core/guards/logout.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    canActivate: [LogoutGuard],
    component: LoginComponent
  },
  {
    path: 'register',
    canActivate: [LogoutGuard],
    component: RegisterComponent
  },
  {
    path: 'todo-list',
    canActivate: [LoginGuard],
    loadChildren: () => import('./features/todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
