import { TestBed, inject } from '@angular/core/testing';

import { DisplayFeederService } from './display-feeder.service';

describe('DisplayFeederService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayFeederService]
    });
  });

  it('should ...', inject([DisplayFeederService], (service: DisplayFeederService) => {
    expect(service).toBeTruthy();
  }));
});
