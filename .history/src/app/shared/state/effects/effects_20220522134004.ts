import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import * as userActions from 'src/app/shared/state/actions/users.actions';
import { from } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, private api: UsersService) {}

  /** Load the List of Users */
  loadUsers = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUserListAction),
      switchMap(() => {
        return from(this.api.getUsers()).pipe(
          map((res: any) => {
            return userActions.getUserListActionSuccess({ users: res.items });
          })
        );
      })
    )
  );

  //   /** Send message and call no actions */
  //   sendMessage$ = createEffect(() => this.actions$.pipe(
  //     ofType(userActions.sendMessage),
  //     switchMap(({ message }) => {
  //       return from(this.api.CreateMessage(message));
  //     })
  //   ), { dispatch: false });
}
