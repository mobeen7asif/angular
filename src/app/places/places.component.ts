import { Component, OnInit } from '@angular/core';
import {PlaceService} from '../services/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  public places: any = [];
  constructor(private placesService: PlaceService ) {
    alert();
    this.placesService.getplaces().subscribe(
      (response: any) => {
        console.log(response);
        const data = response.data;
        // this.usersService.username.next(user.name);
        // this.router.navigateByUrl('');
      },
      (errors: any) => {
         console.log(errors.error.error.messages[0]);
        alert('Something went wrong with server');
      }
    );
  }

  ngOnInit() {
  }

}
