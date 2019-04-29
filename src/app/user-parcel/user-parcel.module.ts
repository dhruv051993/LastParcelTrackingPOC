import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { UserParcelRoutingModule } from './user-parcel-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user-parcel.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/user-parcel.effects';

@NgModule({
  declarations: [ParcelDetailsComponent],
  imports: [
    CommonModule,
    UserParcelRoutingModule,
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature(
      [ ProductEffects ]
    ),
  ]
})
export class UserParcelModule { }
