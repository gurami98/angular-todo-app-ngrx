import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LogoutGuard {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('todo-list');
      return false;
    }
    return true;
  }
}
