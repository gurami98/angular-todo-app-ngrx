import { createReducer, on } from '@ngrx/store';

import { IUser } from '../../../shared/models/user.interfae';
import * as UserActions from './user.actions';

export interface UserState {
  currentUser: IUser | null;
  error: string;
  isLoading: boolean;
}

const initialState: UserState = {
  currentUser: null,
  error: '',
  isLoading: false,
};

export const userReducer = createReducer<UserState>(
  initialState,
  on(UserActions.loginUser, (state): UserState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(UserActions.loginUserSuccess, (state, action): UserState => {
    return {
      ...state,
      currentUser: action.user,
      error: '',
      isLoading: false,
    };
  }),
  on(UserActions.loginUserFailure, (state, action): UserState => {
    return {
      ...state,
      currentUser: null,
      error: action.error,
      isLoading: false,
    };
  }),
  on(UserActions.logoutUser, (state): UserState => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(UserActions.logoutUserSuccess, (state): UserState => {
    return {
      ...state,
      currentUser: null,
      error: '',
      isLoading: false,
    };
  }),
  on(UserActions.logoutUserFailure, (state, action): UserState => {
    return {
      ...state,
      error: action.error,
      isLoading: false,
    };
  })
);
