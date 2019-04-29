import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, switchMap, tap } from 'rxjs/operators';

import { AdminDeliveryService } from '../admin-delivery.service';

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as adminActions from './admin-delivery.action';

@Injectable()
export class ProductEffects {

  constructor(private productService: AdminDeliveryService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(adminActions.ParcelActionTypes.Load),
    mergeMap(action =>
      this.productService.getDeliveryDetailsAdmin().pipe(
        map(parcel => (new adminActions.LoadSuccess(parcel.delivery_data))),
        catchError(err => of(new adminActions.LoadFail(err)))
      )
    )
  );

  @Effect()
  Update: Observable<any> = this.actions$.pipe(
  ofType(adminActions.ParcelActionTypes.Update)
      , map((action: any) => action.payload),
      switchMap(payload =>  {
          return this.productService.updateDeliveryStatus(payload)
      .pipe(
          map((data) => {
          return new adminActions.UpdateSuccess(data.delivery_data);
      }),
      catchError((error) => {
          return of(new adminActions.UpdateFail(error));
      }));
}));
}
