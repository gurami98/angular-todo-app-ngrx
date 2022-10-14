import { environment } from '@environments/environment';

export const REST_URL = {
  LOGIN: `${environment.apiURL}/login`,
  REGISTER: `${environment.apiURL}/register`,
};

export enum ACTION_TYPES {
  LOGIN = '[User] Login User',
  LOGIN_SUCCESS = '[User] Login User Success',
  LOGIN_FAILURE = '[User] Login User Failure',
  LOGOUT = '[User] Logout User',
  LOGOUT_SUCCESS = '[User] Logout User Success',
  LOGOUT_FAILURE = '[User] Logout User Failure',
}
