import { createAction, props } from '@ngrx/store';
import {
  GET_USER_LIST_ACTION,
  GET_USER_LIST_SUCCESS_ACTION,
  GET_USER_LIST_ERROR_ACTION,
  GET_SEARCHED_USER_LIST_ACTION,
  GET_SEARCHED_USER_LIST_SUCCESS_ACTION,
  GET_SEARCHED_USER_LIST_ERROR_ACTION,
} from './constants';
import { User } from 'src/app/shared/interfaces/User';

export const getUserListAction = createAction(
  GET_USER_LIST_ACTION,
  props<{ users: User[] }>()
);

export const getSearchedUserListAction = createAction(
  GET_SEARCHED_USER_LIST_ACTION,
  props<{ usersName: string }>()
);
export const getSearchedUserListActionSuccess = createAction(
  GET_SEARCHED_USER_LIST_SUCCESS_ACTION,
  props<{ users: User[] }>()
);
export const getSearchedUserListActionError = createAction(
  GET_SEARCHED_USER_LIST_ERROR_ACTION,
  props<{ error: string }>()
);
