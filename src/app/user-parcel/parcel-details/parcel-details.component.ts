import { Component, OnInit } from '@angular/core';
import { UserparcelService } from '../user-parcel.service';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/user-parcel.reducer';
import * as productActions from '../state/user-parcel.action';
import { ParcelData } from '../../admin-delivery/delivery-details/delivery-details.model';

@Component({
  selector: 'app-parcel-details',
  templateUrl: './parcel-details.component.html',
  styleUrls: ['./parcel-details.component.css']
})
export class ParcelDetailsComponent implements OnInit {

  deliveryList: ParcelData[];
  products$: Observable<ParcelData[]>;

  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(fromProduct.getProducts)) as Observable<ParcelData[]>;
    this.products$.subscribe(
      (data: ParcelData[]) => { this.deliveryList = data;
     }
    );
    this.store.dispatch(new productActions.Load());
  }

}
