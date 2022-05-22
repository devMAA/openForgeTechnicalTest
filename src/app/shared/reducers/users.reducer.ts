import { Action, createReducer, on } from '@ngrx/store';
import * as userActions from 'src/app/shared/state/actions/users.actions';
import {User} from 'src/app/shared/interfaces/User'


export interface UsersState {
  users: User[];
}

/** Initial State */
export const initialState: UsersState = {
  users: [],
};

export function userReducer(state: UsersState | undefined, action: Action): UsersState {
  return reducer(state, action);
}

const reducer = createReducer<UsersState>(
  initialState,

  /** Loaded users */
  on(userActions.getUserListSuccess, (state, { users }) => ({
    ...state,
    users
  })),

);

