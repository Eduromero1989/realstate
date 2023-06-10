import { TestBed } from '@angular/core/testing';

import { VisitaservicesService } from './visitaservices.service';

describe('VisitaservicesService', () => {
  let service: VisitaservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitaservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
