import { Injectable } from '@angular/core';
import {User} from '../models/User';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppService} from '../app.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  username = new Subject();
  constructor(private http: HttpClient, private app_service: AppService) { }
  registerUser(user: User) {
    const body = new HttpParams()
      .set('name', user.name)
      .set('email', user.email)
      .set('password', user.password);
    return this.http.post(this.app_service.api_end_point + '/user/register',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
  loginUser(user: User) {
    const body = new HttpParams()
      .set('email', user.email)
      .set('password', user.password);
    return this.http.post(this.app_service.api_end_point + '/user/login',
      body.toString(),
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
  }
}

