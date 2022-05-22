import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectUsers = createFeatureSelector<[]>('users');
export const selectSearchedUsers = createFeatureSelector<[]>('users');

export const selectUsersData = createSelector(selectUsers, (users) =>
  users?.map((items) => items)
);

export const selectSearchedUsersData = createSelector(selectSearchedUsers, (users) =>
  users?.map((items) => items)
);
