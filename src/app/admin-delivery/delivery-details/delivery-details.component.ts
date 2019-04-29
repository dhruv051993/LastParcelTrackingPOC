import { Component, OnInit } from '@angular/core';
import { AdminDeliveryService } from '../admin-delivery.service';
import { Observable } from 'rxjs';

import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/admin-delivery.reducer';
import * as productActions from '../state/admin-delivery.action';
import { ParcelData } from './delivery-details.model';

@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.css']
})
export class DeliveryDetailsComponent implements OnInit {

  deliveryList: ParcelData[];
  products$: Observable<ParcelData[]>;
  tempDeliveryList: ParcelData[];
  searchText: string;

  constructor(private store: Store<fromProduct.State>, private adminDeliveryService: AdminDeliveryService) { }

  searchDeliveryList(): void {
    // if (this.searchText) {
    //   this.deliveryList = [...this.tempDeliveryList];
    //   this.deliveryList = this.deliveryList.filter(elm4 => elm4.dlvry_date === this.searchText);
    // } else {
    //   this.deliveryList = [...this.tempDeliveryList];
    // }
    this.store.dispatch(new productActions.Search(this.searchText));
  }

  public enableEditFlag(dlist: ParcelData) {
    this.deliveryList.forEach(element =>
      element.eFlag = false);
    dlist['eFlag'] = true;
  }

  public changeStatus(dlist: ParcelData) {
    const payload: any = { itm_id: dlist._id, dlvry_status: dlist.dlvry_status };
    this.store.dispatch(new productActions.Update(payload));
  }

  ngOnInit() {
    this.products$ = this.store.pipe(select(fromProduct.getProducts)) as Observable<ParcelData[]>;
    this.products$.subscribe(
      (data: ParcelData[]) => {
        this.deliveryList = data;
        this.tempDeliveryList = this.deliveryList;
        if (this.deliveryList) {
          this.deliveryList.forEach(element =>
            element.eFlag = false);
        }
      }
    );
    this.store.dispatch(new productActions.Load());
  }

}
