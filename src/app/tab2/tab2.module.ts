import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { UserItemComponentModule } from 'src/app/components/user-item/user-item.module';
import { UserOverviewComponentModule } from 'src/app/components/user-overview/user-overview.module';
import { UserItemDetailsComponentModule } from 'src/app/components/user-item-details/user-item-details.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    UserItemComponentModule,
    UserOverviewComponentModule,
    UserItemDetailsComponentModule,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
