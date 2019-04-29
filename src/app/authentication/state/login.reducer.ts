import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginActionTypes, LoginActions } from './login.action';

export interface State {
  users: LoginState;
}

// State for this feature (Product)
export interface LoginState {
  userData: any[];
  error: string;
}

const initialState: LoginState = {
  userData: [],
  error: ''
};

const getUserFeatureState = createFeatureSelector<LoginState>('users');

export const getProducts = createSelector(
  getUserFeatureState,
    state => state.userData
  );

export function reducer(state = initialState, action: LoginActions): LoginState {

  switch (action.type) {
    case LoginActionTypes.LoginSuccess:
      return {
        ...state,
        userData: action.payload,
        error: ''
      };

    case LoginActionTypes.LoginFail:
      return {
        ...state,
        userData: [],
        error: action.payload
      };

    default:
      return state;
  }
}
