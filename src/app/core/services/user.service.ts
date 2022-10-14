import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../shared/models/user.interfae";
import {BehaviorSubject, catchError, finalize, Observable, of, tap} from "rxjs";
import {IUserResponse} from "../../shared/models/user-response.interface";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store/app.state";
import {loginUserSuccess} from "../../features/user/store/user.actions";
import Swal from 'sweetalert2';
import {REST_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private store: Store<State>) {
    if (localStorage.getItem('token')) {
      const user = JSON.parse(<string>localStorage.getItem('user'));
      console.log(user);
      this.store.dispatch(loginUserSuccess({user}));
    }
  }

  loginUser(data: IUser): Observable<IUserResponse> {
    this.loading.next(true);
    return this.http.post<IUserResponse>(REST_URL.LOGIN, data).pipe(
      tap(res => {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('token', res.accessToken);
        this.router.navigateByUrl('todo-list').then();
      }),
      finalize(() => this.loading.next(false)),
      catchError(err => {
        Swal.fire({
          title: 'Error while trying to log in!',
          text: err.error,
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#3f51b5'
        }).then();
        throw new Error(err.error);
      })
    );
  }

  registerUser(data: IUser): Observable<IUserResponse> {
    this.loading.next(true);
    return this.http.post<IUserResponse>(REST_URL.REGISTER, data).pipe(
      tap(_ => {
        Swal.fire({
            title: 'Registration Successful!',
            text: 'You can log in now',
            icon: 'success',
            confirmButtonText: 'Okay',
            confirmButtonColor: '#3f51b5'
          }).then();
        this.router.navigateByUrl('/').then();
        }
      ),
      finalize(() => this.loading.next(false)),
      catchError(err => {
        Swal.fire({
          title: 'Error while trying to register!',
          text: err.error,
          icon: 'error',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#3f51b5'
        }).then();
        throw new Error(err.error);
      })
    );
  }

  logoutUser(): Observable<boolean> {
    localStorage.clear();
    this.router.navigateByUrl('login').then();
    return of(true);
  }
}
