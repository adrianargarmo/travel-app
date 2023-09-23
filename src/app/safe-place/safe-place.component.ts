import { Component, OnInit } from '@angular/core';
import { SafePlaceApiService } from '../safe-place-api.service';
import { HttpClient } from '@angular/common/http';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-safe-place',
  templateUrl: './safe-place.component.html',
  styleUrls: ['./safe-place.component.css']
})
export class SafePlaceComponent implements OnInit {

  safePlaceData: any;
  bearerToken: string = '';
  LatitudeNorth: number = 0;
   LongitudeWest: number = 0;

  constructor(private safePlaceService: SafePlaceApiService, private http: HttpClient, private locationService: LocationService) { }

  ngOnInit(): void {
    this.safePlaceService.getToken().subscribe(
      (token: any) => {
        console.log(`Token: ${token.access_token}`)
        this.bearerToken = token.access_token;

        // https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=32.806993&longitude=-96.836857&radius=20&page[limit]=10
        this.safePlaceService.getSafePlaceInformation(40.792027, -74.058204, 20, this.bearerToken).subscribe(
          (data: any) => {
            console.log(`data: ${JSON.stringify(data)}`)
            this.safePlaceData = data;
          },
          (error: any) => {
            console.log(`Error: ${JSON.stringify(error)}`)
          }
        );
      },
      (error: any) => {
        console.log(`Error: ${error}`)
      }
    );
  }
}