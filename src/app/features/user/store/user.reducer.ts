import { createReducer, on } from '@ngrx/store';

import { IUser } from '../../../shared/models/user.interfae';
import * as UserActions from './user.actions';

export interface UserState {
  currentUser: IUser | null;
  error: string;
}

const initialState: UserState = {
  currentUser: null,
  error: '',
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loginUserSuccess, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user,
      error: '',
    };
  }),
  on(UserActions.loginUserFailure, (state, action): UserState => {
    return {
      ...state,
      currentUser: null,
      error: action.error,
    };
  }),
  on(UserActions.logoutUserSuccess, (state): UserState => {
    return {
      ...state,
      currentUser: null,
      error: '',
    };
  }),
  on(UserActions.logoutUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
    };
  })
);
