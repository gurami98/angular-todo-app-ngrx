import {createAction, props} from "@ngrx/store";
import {IUser} from "../../../shared/models/user.interfae";

export const loginUser = createAction(
  '[User] Login User',
  props<{user: IUser}>()
);

export const loginUserSuccess = createAction(
  '[User] Login User Success',
  props<{user: IUser}>()
);

export const loginUserFailure = createAction(
  '[User] Login User Failure',
  props<{error: string}>()
);

export const logoutUser = createAction(
  '[User] Logout User'
);

export const logoutUserSuccess = createAction(
  '[User] Logout User Success'
);

export const logoutUserFailure = createAction(
  '[User] Logout User Failure',
  props<{error: string}>()
);
