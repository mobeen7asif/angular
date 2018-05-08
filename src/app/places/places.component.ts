import {Component, Input, OnInit} from '@angular/core';
import {PlaceService} from '../services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public places: any = [];
  @Input() place_id: any;
  constructor(private placesService: PlaceService ) {
  }

  ngOnInit() {
    this.placesService.getplaces().subscribe(
      (response: any) => {
         this.places = response.data;
         this.placesService.places = response.data;
      },
      (errors: any) => {
        console.log(errors.error.error.messages[0]);
        alert('Something went wrong with server');
      }
    );
  }

}
