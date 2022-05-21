import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { IonInfiniteScroll } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  maxItems: number = 10;
  users: any;

  constructor(private usersService: UsersService, private router: Router) {
    this.users = this.users?.slice(0, this.maxItems);
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      console.log(response);

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

  goToDetails(id?: number) {
    this.router.navigate(['/tabs/tab2/' + id]);
  }
}
