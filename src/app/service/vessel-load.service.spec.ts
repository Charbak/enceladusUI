import { TestBed } from '@angular/core/testing';

import { VesselLoadService } from './vessel-load.service';

describe('VesselLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VesselLoadService = TestBed.get(VesselLoadService);
    expect(service).toBeTruthy();
  });
});
