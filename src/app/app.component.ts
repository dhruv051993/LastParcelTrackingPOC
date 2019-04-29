import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParcelTrack';
  userinfo: any;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
         this.userinfo = localStorage.getItem('userinfo');
      }
    });
  }

  public logout() {
    localStorage.removeItem('userinfo');
    this.router.navigateByUrl('/authentication/login');
  }
}
