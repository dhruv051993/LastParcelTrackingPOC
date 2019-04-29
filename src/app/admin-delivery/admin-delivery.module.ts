import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { AdminDeliveryRoutingModule } from './admin-delivery-routing.module';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/admin-delivery.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/admin-delivery.effects';

@NgModule({
  declarations: [DeliveryDetailsComponent],
  imports: [
    CommonModule,
    AdminDeliveryRoutingModule,
    FormsModule,
    StoreModule.forFeature('parcelData', reducer),
    EffectsModule.forFeature(
      [ ProductEffects ]
    ),
  ]
})
export class AdminDeliveryModule { }
