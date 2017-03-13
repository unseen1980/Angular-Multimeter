import { TestBed, inject } from '@angular/core/testing';

import { SerialCommunicationService } from './serial-communication.service';

describe('SerialCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerialCommunicationService]
    });
  });

  it('should ...', inject([SerialCommunicationService], (service: SerialCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
