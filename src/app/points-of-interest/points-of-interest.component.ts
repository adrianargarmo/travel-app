import { Component, OnInit } from '@angular/core';
import { PointsOfInterestApiService } from '../points-of-interest-api.service';

@Component({
  selector: 'app-points-of-interest',
  templateUrl: './points-of-interest.component.html',
  styleUrls: ['./points-of-interest.component.css']
})
export class PointsOfInterestComponent implements OnInit {
  pointsOfInterestData: any;

  constructor(private pointsOfInterestService: PointsOfInterestApiService) { }

  ngOnInit(): void {
    // https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=32.806993&longitude=-96.836857&radius=20&page[limit]=10
    this.pointsOfInterestData.getSafePlaceInformation(32.806993, -96.836857, 20).subscribe(
      (data: any) => {
        this.pointsOfInterestData = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
