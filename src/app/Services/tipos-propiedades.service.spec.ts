import { TestBed } from '@angular/core/testing';

import { TiposPropiedadesService } from './tipos-propiedades.service';

describe('TiposPropiedadesService', () => {
  let service: TiposPropiedadesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposPropiedadesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
