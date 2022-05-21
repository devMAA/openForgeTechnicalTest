import { createReducer, on } from '@ngrx/store';
import { usersList } from 'src/app/shared/state/actions/users.actions';

export const initialState = [];

export const userReducer = createReducer(
  initialState,
  on(usersList, (state, { users }) => users)
);
