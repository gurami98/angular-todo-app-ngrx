import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';
import * as UserActions from './user.actions';
import {UserService} from "../../../core/services/user.service";

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService) {}

  loginUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loginUser),
      concatMap((action) => this.userService.loginUser(action.user).pipe(
        map(({user}) => UserActions.loginUserSuccess({user})),
        catchError(({message}) => of(UserActions.loginUserFailure({error: message})))
      ))
    );
  });

  logoutUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.logoutUser),
      concatMap(_ => this.userService.logoutUser().pipe(
        map(_ => UserActions.logoutUserSuccess()),
        catchError(_ => of(UserActions.logoutUserFailure({error: 'error trying to log out'})))
      ))
    );
  });
}
