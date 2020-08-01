import { TestBed } from '@angular/core/testing';

import { LlavesService } from './llaves.service';

describe('LlavesService', () => {
  let service: LlavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
