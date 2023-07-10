import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { UserData, UserType } from "../models/user.model";
import { LoginApiActions } from "./login.actions";


export const featureKey = 'login';

type State = {
  user: UserData | undefined;
  login: Pick<UserType, 'login' | 'password'> | undefined;
  loading: boolean;
};

export const initialState: State = {
  user: undefined,
  login: undefined,
  loading: false,
};

const featureReducer = createReducer(
  initialState,
  on(LoginApiActions.userLogin, (state) =>
    Object.assign({}, state, { loading: true })
  ),
  on(LoginApiActions.returnLogin, (state, { userData }) =>
    Object.assign({}, state, { user: userData, loading: false })
  ),
  on(LoginApiActions.loginFailure, (state) =>
    Object.assign({}, state, { loading: false })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}

// SELECTORS
export const selectFeature = createFeatureSelector<State>(featureKey);

export const selectUser = createSelector(
  selectFeature,
  ({ user }) => user
);

export const selectLoginLoading = createSelector(
  selectFeature,
  ({ loading }) => loading
);
