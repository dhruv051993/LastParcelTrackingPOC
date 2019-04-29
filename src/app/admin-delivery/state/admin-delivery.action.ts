import { Action } from '@ngrx/store';
import { ParcelData } from '../delivery-details/delivery-details.model';

export enum ParcelActionTypes {
  Load = '[ParcelData] Load',
  LoadSuccess = '[ParcelData] Load Success',
  LoadFail = '[ParcelData] Load Fail',
  Update = '[ParcelData] Update',
  UpdateSuccess = '[ParcelData] Update Success',
  UpdateFail = '[ParcelData] Update Fail',
  Search = '[Parcel Data] Search Parcel'
}

export class Load implements Action {
  readonly type = ParcelActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ParcelActionTypes.LoadSuccess;

  constructor(public payload: ParcelData[]) { }
}

export class LoadFail implements Action {
  readonly type = ParcelActionTypes.LoadFail;

  constructor(public payload: string) { }
}

export class Update implements Action {
  readonly type = ParcelActionTypes.Update;

  constructor(public payload: string) { }
}

export class UpdateSuccess implements Action {
  readonly type = ParcelActionTypes.UpdateSuccess;

  constructor(public payload: ParcelData[]) { }
}

export class UpdateFail implements Action {
  readonly type = ParcelActionTypes.UpdateFail;

  constructor(public payload: string) { }
}

export class Search implements Action {
  readonly type = ParcelActionTypes.Search;

  constructor(public payload: string) { }
}

export type ParcelActions = Load
  | LoadSuccess
  | LoadFail
  | Update
  | UpdateSuccess
  | UpdateFail
  | Search;

