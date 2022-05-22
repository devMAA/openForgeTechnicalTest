import { createAction, props } from '@ngrx/store';
import {
	GET_USER_LIST_ACTION,
GET_USER_LIST_SUCCESS_ACTION,
GET_USER_LIST_ERROR_ACTION,
} from './constants'
import { User } from 'src/app/shared/interfaces/User';

export const getUserListAction = createAction('Users list', props<{ users: User[] }>());
export const getUserListActionSuccess = createAction('Users list', props<{ users: User[] }>());
export const getUserListActionError = createAction('Users list', props<{ users: User[] }>());


export const getSearchedUserListAction = createAction('Searched Users list', props<{ users: User[] }>());