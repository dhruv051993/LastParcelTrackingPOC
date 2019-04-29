import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserparcelService {

  constructor(private http: HttpClient) { }

  getParcelDetailsUser(): Observable<any> {
    const headers = {};
    headers['Content-Type'] = 'application/JSON';
    headers['Access-Control-Allow-Origin'] = '*';
    headers['x-auth-token'] = JSON.parse(localStorage.getItem('userinfo')).jwt;
    headers['loginusername'] = JSON.parse(localStorage.getItem('userinfo')).username;
    const httpOptions = { headers: new HttpHeaders(headers) };
    return this.http
      .get<any>(environment.baseUrl + 'getParcelDetailsUser', httpOptions)
      .pipe(tap(response => {},
      error => {
        window.alert(error.error.message);
      } ));
  }
}
