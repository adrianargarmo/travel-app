import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  location: any;

  constructor(private route: ActivatedRoute, private locationService: LocationService) { }

  ngOnInit(): void {
    this.getLocationDetails();
  }

  getLocationDetails() {
    const id = this.route.snapshot.paramMap.get('id');

    this.locationService.getLocation(Number(id)).subscribe((location) => {
      this.location = location;
    });
  }
}