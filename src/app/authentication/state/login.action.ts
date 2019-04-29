import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  Login = '[ParcelData] Login',
  LoginSuccess = '[ParcelData] Login Success',
  LoginFail = '[ParcelData] Login Fail'
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;

  constructor(public payload: any[]) {
  }
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;

  constructor(public payload: any[]) { }
}

export class LoginFail implements Action {
  readonly type = LoginActionTypes.LoginFail;

  constructor(public payload: string) { }
}

export type LoginActions = Login
  | LoginSuccess
  | LoginFail;

