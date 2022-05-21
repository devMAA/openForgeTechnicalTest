import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUsers = createFeatureSelector<[]>('users');

export const selectUserData = createSelector(selectUsers, (users) =>
  users?.map((items) => items)
);
