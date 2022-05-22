import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/User';

// Use createFeatureSelector to retrieve only the cart slice of our application state
export const selectUserState = createFeatureSelector<User>('user');
console.log(selectUserState())
// Use createSelector to select data from state (can contain up to 8 different feature slices)
export const selectUsers = createSelector(
  selectUserState,
  (user) => user
);
