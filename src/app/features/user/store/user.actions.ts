import { createAction, props } from '@ngrx/store';
import { IUser } from '../../../shared/models/user.interfae';
import { ACTION_TYPES } from '../../../core/constants';

export const loginUser = createAction(
  ACTION_TYPES.LOGIN,
  props<{ user: IUser }>()
);

export const loginUserSuccess = createAction(
  ACTION_TYPES.LOGIN_SUCCESS,
  props<{ user: IUser }>()
);

export const loginUserFailure = createAction(
  ACTION_TYPES.LOGIN_FAILURE,
  props<{ error: string }>()
);

export const logoutUser = createAction(ACTION_TYPES.LOGOUT);

export const logoutUserSuccess = createAction(ACTION_TYPES.LOGOUT_SUCCESS);

export const logoutUserFailure = createAction(
  ACTION_TYPES.LOGOUT_FAILURE,
  props<{ error: string }>()
);
