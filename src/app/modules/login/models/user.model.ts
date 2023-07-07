export type UserType = {
  login: string;
  password: string;
  name: string;
  token: string;
  permissions: string[];
};

export type UserData = Omit<UserType, 'password'>;

export type Login = Pick<UserType, 'login' | 'password'>
