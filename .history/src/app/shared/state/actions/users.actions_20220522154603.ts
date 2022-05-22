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




export const getUserList = createAction(GET_USER_LIST_ACTION);
export const getUserListSuccess = createAction(
  GET_USER_LIST_SUCCESS_ACTION,
  props<{ users: any[] }>()
);
export const getUserListError = createAction(
  GET_USER_LIST_ERROR_ACTION,
  props<{ error: string }>()
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
