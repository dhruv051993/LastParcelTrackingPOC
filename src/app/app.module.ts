import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './authentication/authentication.service';
import { AdminDeliveryService } from './admin-delivery/admin-delivery.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserparcelService } from './user-parcel/user-parcel.service';
import { AuthGuard } from './guards/auth.guard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Parcel Tracking System',
      maxAge: 25,
      logOnly: environment.production,
    })
  ],
  providers: [AuthenticationService, AdminDeliveryService, UserparcelService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
