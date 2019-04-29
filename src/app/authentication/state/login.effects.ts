import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as loginActions from './login.action';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {

  constructor(private authService: AuthenticationService, private router: Router,
              private actions: Actions) { }

  @Effect()
  Login: Observable<any> = this.actions.pipe(
  ofType(loginActions.LoginActionTypes.Login)
      , map((action: any) => action.payload),
      switchMap(payload =>  {
          return this.authService.authenticateUser(payload)
      .pipe(
          map((user) => {
          return new loginActions.LoginSuccess(user);
      }),
      catchError((error) => {
          return of(new loginActions.LoginFail(error));
      }));
}));

@Effect({ dispatch: false })
LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(loginActions.LoginActionTypes.LoginSuccess),
    tap((user) => {
      localStorage.setItem('userinfo', JSON.stringify(user.payload.data));
      this.checkRoute(user.payload.data);
    })
);

private checkRoute(respData): void {
  if (respData.role === 'admin') {
    this.router.navigateByUrl('/adminDelivery/details');
  } else if (respData.role === 'user') {
    this.router.navigateByUrl('/userParcel/details');
  }
}

}
