import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUsers = createFeatureSelector<[]>('users');

export const selectUsersData = createSelector(selectUsers, (users) =>
  users?.map((items) => items)
);
