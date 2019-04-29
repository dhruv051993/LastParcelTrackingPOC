import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ParcelActionTypes, ParcelActions } from './admin-delivery.action';
import { ParcelData } from '../delivery-details/delivery-details.model';

export interface State {
  parcelData: ParcelState;
}

export interface ParcelState {
  parcel: ParcelData[];
  error: string;
  SearchText: string;
}

const initialState: ParcelState = {
  parcel: [],
  error: '',
  SearchText: ''
};

const getParcelFeatureState = createFeatureSelector<ParcelState>('parcelData');

export const getProducts = createSelector(
    getParcelFeatureState,
    state => state.parcel
  );

export function reducer(state = initialState, action: ParcelActions): ParcelState {

  switch (action.type) {
    case ParcelActionTypes.LoadSuccess:
      return {
        ...state,
        parcel: action.payload,
        error: ''
      };

    case ParcelActionTypes.LoadFail:
      return {
        ...state,
        parcel: [],
        error: action.payload
      };

      case ParcelActionTypes.UpdateSuccess:
      return {
        ...state,
        parcel: action.payload,
        error: ''
      };

      case ParcelActionTypes.UpdateFail:
      return {
        ...state,
        parcel: [],
        error: action.payload
      };

      case ParcelActionTypes.Search:
      const updatedProducts = state.parcel.filter(
        item => item.dlvry_date === action.payload);
      return {
        ...state,
        parcel: updatedProducts,
        error: '',
        SearchText: action.payload
      };

    default:
      return state;
  }
}
