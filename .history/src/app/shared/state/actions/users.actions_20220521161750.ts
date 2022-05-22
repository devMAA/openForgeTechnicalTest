import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/shared/interfaces/User';

export const usersList = createAction('Users list', props<{ users: User[] }>());
