import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ParcelActionTypes, ParcelActions } from './user-parcel.action';
import { ParcelData } from '../../admin-delivery/delivery-details/delivery-details.model';

export interface State {
  products: ParcelState;
}

// State for this feature (Product)
export interface ParcelState {
  parcel: ParcelData[];
  error: string;
}

const initialState: ParcelState = {
  parcel: [],
  error: ''
};

const getParcelFeatureState = createFeatureSelector<ParcelState>('products');

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

    default:
      return state;
  }
}
