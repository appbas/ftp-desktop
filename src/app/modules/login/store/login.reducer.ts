import { createFeature, createReducer, createSelector } from '@ngrx/store';
import { UserData } from '../models/user.model';

type State = { userData: UserData | undefined };

const initialState: State = {
  userData: undefined,
};

export const usersFeature = createFeature({
  name: 'login',
  reducer: createReducer(initialState /* case reducers */),
  // 👇 adding extra selectors to the `usersFeature` object
  extraSelectors: ({ selectUserData }) => ({
    selectUserData: createSelector(selectUserData, (userData) => userData),
  }),
});
