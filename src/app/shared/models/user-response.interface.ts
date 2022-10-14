import { IUser } from './user.interfae';

export interface IUserResponse {
  accessToken: string;
  user: IUser;
}
