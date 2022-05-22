import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserItemComponent } from './user-item.component';
import { UserOverviewComponentModule } from 'src/app/components/user-overview/user-overview.module';
import { UserItemDetailsComponentModule } from 'src/app/components/user-item-details/user-item-details.module';
import { UserItemDetailsComponent } from 'src/app/components/user-item-details/user-item-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserOverviewComponentModule,
    UserItemDetailsComponentModule,
  ],
  declarations: [UserItemComponent, UserItemDetailsComponent],
  exports: [UserItemComponent],
})
export class UserItemComponentModule {}
