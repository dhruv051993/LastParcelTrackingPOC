import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/JSON',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticateUser(payload): Observable<any> {
    return this.http
      .post<any>(environment.baseUrl + 'authenticate', payload, httpOptions)
      .pipe(tap(response => {},
      error => {
        window.alert(error.error.message);
      } ));
  }
}
