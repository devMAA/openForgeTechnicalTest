import { createReducer, on } from '@ngrx/store';
import * as userActions from 'src/app/shared/state/actions/users.actions';

export const initialState = [];

export const usersReducer = createReducer(
    initialState,
    on(userActions.getUserList, (state, { users }) => user),
);