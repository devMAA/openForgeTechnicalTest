import { Component , OnInit} from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {

  constructor(private usersService: UsersService ) {}


   async ngOnInit() {
     await  this.usersService.getUsers()
      .subscribe(
        (user)=> console.log(user));
  }
}
