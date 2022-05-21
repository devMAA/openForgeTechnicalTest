import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  hello: string;
  constructor(private router: ActivatedRoute) {}

  ngOninit() {
    console.log('zzzz', this.router.snapshot.params.id);
  }
}
