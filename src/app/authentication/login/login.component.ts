import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import * as fromProduct from '../state/login.reducer';
import * as loginActions from '../state/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router,
     private store: Store<fromProduct.State>) {
    const userInfo: string = localStorage.getItem('userinfo');
    if (userInfo) {
      this.checkRoute(JSON.parse(userInfo));
    }
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private checkRoute(respData): void {
    if (respData.role === 'admin') {
      this.router.navigateByUrl('/adminDelivery/details');
    } else if (respData.role === 'user') {
      this.router.navigateByUrl('/userParcel/details');
    }
  }

  public authenticateUser(): void {
    this.store.dispatch(new loginActions.Login(this.loginForm.value));
  }

}
