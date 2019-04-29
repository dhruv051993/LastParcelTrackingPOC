import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AdminDeliveryService {

  constructor(private http: HttpClient) { }

  getDeliveryDetailsAdmin(): Observable<any> {
    const headers = {};
    headers['Content-Type'] = 'application/JSON';
    headers['Access-Control-Allow-Origin'] = '*';
    headers['x-auth-token'] = JSON.parse(localStorage.getItem('userinfo')).jwt;
    headers['loginusername'] = JSON.parse(localStorage.getItem('userinfo')).username;
    const httpOptions = { headers: new HttpHeaders(headers) };
    return this.http
      .get<any>(environment.baseUrl + 'getDeliveryDetailsAdmin', httpOptions)
      .pipe(tap(response => {},
      error => {
        window.alert(error.error.message);
      } ));
  }

  updateDeliveryStatus(payload): Observable<any> {
    const headers = {};
    headers['Content-Type'] = 'application/JSON';
    headers['Access-Control-Allow-Origin'] = '*';
    headers['x-auth-token'] = JSON.parse(localStorage.getItem('userinfo')).jwt;
    headers['loginusername'] = JSON.parse(localStorage.getItem('userinfo')).username;
    const httpOptions = { headers: new HttpHeaders(headers) };
    return this.http
      .post<any>(environment.baseUrl + 'setDeliveryStatus', payload, httpOptions)
      .pipe(tap(response => {},
      error => {
        window.alert(error.error.message);
      } ));
  }
}
