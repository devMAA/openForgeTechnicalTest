import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { UserListComponentModule } from 'src/app/components/user-list/user-list.module';
import { UserOverviewComponentModule } from 'src/app/components/user-overview/user-overview.module';
import { UserItemDetailsComponentModule } from 'src/app/components/user-item-details/user-item-details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    UserListComponentModule,
    UserOverviewComponentModule,
    UserItemDetailsComponentModule,
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
