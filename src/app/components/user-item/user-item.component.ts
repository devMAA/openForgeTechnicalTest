import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  searchByName(value?: any) {
    console.log(value);
  }
}
