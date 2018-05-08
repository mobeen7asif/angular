import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../models/User';
import {AppService} from '../app.service';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PlaceService {
  public places: any = [];
  constructor(private http: HttpClient, private app_service: AppService, private _loadingBar: SlimLoadingBarService) {}
  getplaces() {
    return this.http.get(this.app_service.api_end_point + '/get/places',
      {
        headers: new HttpHeaders()
          .append('Authorization', (JSON.parse(localStorage.getItem('user'))).session_id)
          .set('Content-Type', 'application/x-www-form-urlencoded')
      });
  }
  getPlaceById(id: number)  {

    for (const place of this.places) {
      if (place.id == id) {
        return place;
      }
    }
    return this.places[id];
  }
  // find_obj_by_prop(property: any, value: any, stack: Array<any>){
  //   stack = _.cloneDeep(stack);
  //   for (let stackItem of stack) {
  //     if (stackItem[property] == value)
  //       return stackItem;
  //   }
  //   return null;
  // }

}
