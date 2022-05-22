import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item-details',
  templateUrl: './user-item-details.component.html',
  styleUrls: ['./user-item-details.component.scss'],
})
export class UserItemDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  goToBlog(link?: string) {
    console.log(link);
  }
}
