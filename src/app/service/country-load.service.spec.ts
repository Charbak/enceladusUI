import { TestBed } from '@angular/core/testing';

import { CountryLoadService } from './country-load.service';

describe('CountryLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryLoadService = TestBed.get(CountryLoadService);
    expect(service).toBeTruthy();
  });
});
