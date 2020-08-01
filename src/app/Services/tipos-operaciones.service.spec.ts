import { TestBed } from '@angular/core/testing';

import { TiposOperacionesService } from './tipos-operaciones.service';

describe('TiposOperacionesService', () => {
  let service: TiposOperacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposOperacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
