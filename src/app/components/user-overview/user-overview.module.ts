import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserOverviewComponent } from 'src/app/components/user-overview/user-overview.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [UserOverviewComponent],
  exports: [UserOverviewComponent],
})
export class UserOverviewComponentModule {}
