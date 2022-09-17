import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../shared/models/user.interfae";
import {catchError, Observable, of, tap} from "rxjs";
import {IUserResponse} from "../../shared/models/user-response";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/app.state";
import {loginUserSuccess} from "../../features/user/store/user.actions";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router, private store: Store<State>) {
    if (localStorage.getItem('token')) {
      const user = JSON.parse(<string>localStorage.getItem('user'));
      console.log(user)
      this.store.dispatch(loginUserSuccess({user}))
    }
  }

  loginUser(data: IUser): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${environment.apiURL}/login`, data).pipe(
      tap(res => {
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', res.accessToken)
        this.router.navigateByUrl('todo-list')
      }),
      catchError(err => {
        alert(`Error while trying to log in! MESSAGE: ${err.error}`)
        throw new Error(err.error);
      })
    )
  }

  registerUser(data: IUser): Observable<IUserResponse> {
    return this.http.post<IUserResponse>(`${environment.apiURL}/register`, data).pipe(
      tap(_ => alert('Registration Successful! Go to login')),
      catchError(err => {
        alert(`Error while trying to register! MESSAGE: ${err.error}`)
        throw new Error(err.error);
      })
    )
  }

  logoutUser(): Observable<boolean> {
    localStorage.clear();
    this.router.navigateByUrl('login');
    return of(true);
  }
}
