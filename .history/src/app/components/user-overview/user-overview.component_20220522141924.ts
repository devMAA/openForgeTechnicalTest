import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/interfaces/User';
import { import { User } from 'src/app/shared/interfaces/User';
} from 'src/app/shared/interfaces/User';
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

  constructor(private usersService: UsersService, private router: Router,
    private api: UsersService, 
    private store: Store<UsersState>
    ) {
    this.users = this.users?.slice(0, this.maxItems);
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    });
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


  listUsers(): void {
    this.store.dispatch(loadMessages({ channelId: '2' }));
    this.messages = this.store.pipe(
      select(selectMessages),
      delay(10)
    );
  }

}