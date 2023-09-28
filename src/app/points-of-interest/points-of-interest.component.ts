import { Component, OnInit, Input } from '@angular/core';
import { PointsOfInterestApiService } from '../points-of-interest-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-points-of-interest',
  templateUrl: './points-of-interest.component.html',
  styleUrls: ['./points-of-interest.component.css']
})
export class PointsOfInterestComponent implements OnInit {
  pointsOfInterestData: any;
  bearerToken: string = '';
  selectedRadius: number = 20;
  selectedCategory: any[] = [];

  @Input() latitude: number = 0;
  @Input() longitude: number = 0;

  constructor(private pointsOfInterestService: PointsOfInterestApiService, private http: HttpClient) { }

  ngOnInit(): void {
    this.pointsOfInterestService.getToken().subscribe(
      (token: any) => {
        console.log(`Token: ${token.access_token}`)
        this.bearerToken = token.access_token;

        // https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=32.806993&longitude=-96.836857&radius=20&page[limit]=10
        this.pointsOfInterestService.getPointsOfInterestInformation(this.latitude, this.longitude, this.selectedRadius, this.bearerToken).subscribe(
          (data: any) => {
            console.log(`data: ${JSON.stringify(data)}`)
            this.pointsOfInterestData = data;
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

    this.fetchPointsOfInterest();
  }

  fetchPointsOfInterest() {
    //  Modify your API call to include filters based on selectedCategory and selectedRadius
    this.pointsOfInterestService.getPointsOfInterestInformationWithCategory(this.latitude, this.longitude, this.selectedRadius, this.bearerToken, this.selectedCategory).subscribe(
      (data: any) => {
        this.pointsOfInterestData = data;
      },
      (error: any) => {
        console.log(`Error: ${JSON.stringify(error)}`)
      }
    );
  }
}



