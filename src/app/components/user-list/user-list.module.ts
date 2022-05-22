import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserListComponent } from './user-list.component';
import { UserOverviewComponentModule } from 'src/app/components/user-overview/user-overview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserOverviewComponentModule,
    //UserItemDetailsComponentModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserListComponentModule {}
