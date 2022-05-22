import { createSelector } from '@ngrx/store';

export const selectUsersState = (state) => state;


export const selectUsers = createSelector(
  selectUsersState,
  (state) => state.users
);
