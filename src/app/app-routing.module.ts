import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { LoginComponent } from '@features/user/login/login.component';
import { RegisterComponent } from '@features/user/register/register.component';
import { LoginGuard, LogoutGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    canActivate: [LogoutGuard],
    component: LoginComponent,
  },
  {
    path: 'register',
    canActivate: [LogoutGuard],
    component: RegisterComponent,
  },
  {
    path: 'todo-list',
    canActivate: [LoginGuard],
    loadComponent: () =>
      import('./features/todo-list/todo-list.component').then(
        m => m.TodoListComponent
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
