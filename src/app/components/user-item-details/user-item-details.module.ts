import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserItemDetailsComponent } from 'src/app/components/user-item-details/user-item-details.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [UserItemDetailsComponent],
  exports: [UserItemDetailsComponent],
})
export class UserItemDetailsComponentModule {}
