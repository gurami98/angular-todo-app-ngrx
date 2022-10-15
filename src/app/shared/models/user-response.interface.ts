import { IUser } from './user.interface';

export interface IUserResponse {
  accessToken: string;
  user: IUser;
}
