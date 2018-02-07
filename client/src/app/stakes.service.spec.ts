import { TestBed, inject } from '@angular/core/testing';

import { StakesService } from './stakes.service';

describe('StakesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StakesService]
    });
  });

  it('should be created', inject([StakesService], (service: StakesService) => {
    expect(service).toBeTruthy();
  }));
});
