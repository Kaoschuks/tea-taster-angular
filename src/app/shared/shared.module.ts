import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [RatingComponent],
  exports: [RatingComponent],
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SharedModule {}
