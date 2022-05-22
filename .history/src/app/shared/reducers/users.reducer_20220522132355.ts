import { createReducer, on } from '@ngrx/store';
import { getUserListAction , searchedgetUserListAction } from 'src/app/shared/state/actions/users.actions';

export const initialState = [];

export const usersReducer = createReducer(
  initialState,
  on(getUserListAction, (state, { users }) => users),
  on(searchedgetUserListAction , (state, { users }) => users)
);
