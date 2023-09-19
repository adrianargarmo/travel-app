import { Component, OnInit } from '@angular/core';
import { SafePlaceApiService } from '../safe-place-api.service';

@Component({
  selector: 'app-safe-place',
  templateUrl: './safe-place.component.html',
  styleUrls: ['./safe-place.component.css']
})
export class SafePlaceComponent implements OnInit {
  safePlaceData: any;

  constructor(private safePlaceService: SafePlaceApiService) { }

  ngOnInit(): void {
    // https://test.api.amadeus.com/v1/safety/safety-rated-locations?latitude=32.806993&longitude=-96.836857&radius=20&page[limit]=10
    this.safePlaceService.getSafePlaceInformation(32.806993, -96.836857, 20).subscribe(
      (data: any) => {
        this.safePlaceData = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
