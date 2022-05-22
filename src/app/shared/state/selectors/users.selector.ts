import { createSelector, createFeatureSelector } from '@ngrx/store'; 

export const selectUserState = createFeatureSelector<any>('users');



export const selectUsers = createSelector(
  selectUserState,
  (users) => users.map((items) => items.users)
);