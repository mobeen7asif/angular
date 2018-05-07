import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../models/User';
import {AppService} from '../app.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Injectable()
export class PlaceService {

  constructor(private http: HttpClient, private app_service: AppService, private _loadingBar: SlimLoadingBarService) {}
  getplaces() {
    return this.http.get(this.app_service.api_end_point + '/get/places',
      {
        headers: new HttpHeaders()
          .append('Authorization', (JSON.parse(localStorage.getItem('user'))).session_id)
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }

}
