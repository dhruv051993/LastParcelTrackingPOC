import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StoreModule } from '@ngrx/store';
import { reducer } from './state/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from './state/login.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature(
      [ LoginEffects ]
    ),
  ]
})
export class AuthenticationModule { }
