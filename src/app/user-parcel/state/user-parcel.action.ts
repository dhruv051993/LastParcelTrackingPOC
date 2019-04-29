import { Action } from '@ngrx/store';

export enum ParcelActionTypes {
  Load = '[ParcelData] Load',
  LoadSuccess = '[ParcelData] Load Success',
  LoadFail = '[ParcelData] Load Fail'
}

export class Load implements Action {
  readonly type = ParcelActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ParcelActionTypes.LoadSuccess;

  constructor(public payload: any[]) { }
}

export class LoadFail implements Action {
  readonly type = ParcelActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export type ParcelActions = Load
  | LoadSuccess
  | LoadFail;

