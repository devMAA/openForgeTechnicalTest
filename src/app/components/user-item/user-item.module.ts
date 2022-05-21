import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { UserItemComponent } from './user-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [UserItemComponent],
  exports: [UserItemComponent],
})
export class UserItemComponentModule {}
