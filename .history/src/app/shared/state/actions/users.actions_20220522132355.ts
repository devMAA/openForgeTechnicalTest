import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/User';

export const getUserListAction = createAction('Users list', props<{ users: User[] }>());
export const searchedgetUserListAction = createAction('Searched Users list', props<{ users: User[] }>());
