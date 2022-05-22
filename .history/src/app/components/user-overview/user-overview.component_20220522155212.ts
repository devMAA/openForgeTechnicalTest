import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IonInfiniteScroll } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/interfaces/User';
import { userReducer } from 'src/app/shared/reducers/users.reducer';
import * as userActions from 'src/app/shared/state/actions/users.actions';
import * as userSelectors from 'src/app/shared/state/selectors/users.selector';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  maxItems: number = 10;
  users: any;
  userslist: Observable<any[]>;

  public users$: Observable<User> = this.store.select(
    userSelectors.selectUsers
  );


  constructor(
    private router: Router,
    private api: UsersService,
    private store: Store
  ) {
    this.users = this.users?.slice(0, this.maxItems);
  }

  ngOnInit(): void {
    this.listUsers()
  }

  listUsers(): void {
    this.store.dispatch(userActions.getUserList());
    this.userslist = this.store.pipe(
      select(userSelectors.selectUsers),
      delay(10)
    );
  }

  loadData(event) {
    setTimeout(() => {
      this.maxItems += 15;
      this.users = this.users?.slice(0, this.maxItems);

      event.target.complete();
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  goToDetails(user?: User) {
    console.log(user);
    this.router.navigate(['/tabs/tab2/' + user?.login]);
  }
}
