import {Component, OnChanges, OnInit} from '@angular/core';
import {PlaceService} from '../services/place.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent implements OnInit , OnChanges {
  public place: any;
  constructor(private placeService: PlaceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getPlace();
  }

  getPlace() {
    this.route.params.subscribe(
      (params: Params) => {
        this.place = <any>this.placeService.getPlaceById(params['id']);

        this.placeService.places.subscribe(places => {
          this.place = <any>this.placeService.getPlaceById(params['id']);
        });
      });
  }

  ngOnChanges() {
    console.log('change');
  }
}
