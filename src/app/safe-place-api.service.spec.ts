import { TestBed } from '@angular/core/testing';

import { SafePlaceApiService } from './safe-place-api.service';

describe('SafePlaceApiService', () => {
  let service: SafePlaceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafePlaceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
