import { TestBed } from '@angular/core/testing';

import { PointsOfInterestApiService } from './points-of-interest-api.service';

describe('PointsOfInterestApiService', () => {
  let service: PointsOfInterestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PointsOfInterestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
