import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  constructor(private router: Router) {}

  canActivate() {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
