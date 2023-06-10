import { TestBed } from '@angular/core/testing';

import { ServicesVisitaService } from './services-visita.service';

describe('ServicesVisitaService', () => {
  let service: ServicesVisitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesVisitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
