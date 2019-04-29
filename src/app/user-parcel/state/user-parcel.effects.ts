import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserparcelService } from '../user-parcel.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as adminActions from './user-parcel.action';

@Injectable()
export class ProductEffects {

  constructor(private productService: UserparcelService,
              private actions$: Actions) { }

  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(adminActions.ParcelActionTypes.Load),
    mergeMap(action =>
      this.productService.getParcelDetailsUser().pipe(
        map(products => (new adminActions.LoadSuccess(products.parcel_data))),
        catchError(err => of(new adminActions.LoadFail(err)))
      )
    )
  );

}
