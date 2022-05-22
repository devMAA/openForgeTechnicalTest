import { createSelector, createFeatureSelector } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/User';


export const selectUserState = createFeatureSelector<any>('users');



export const selectUsers = createSelector(
  selectUserState,
  (users) => users.map((items) => items.users)
);