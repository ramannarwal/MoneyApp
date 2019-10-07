import { TestBed, inject } from '@angular/core/testing';

import { HashrateService } from './hashrate.service';

describe('HashrateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashrateService]
    });
  });

  it('should be created', inject([HashrateService], (service: HashrateService) => {
    expect(service).toBeTruthy();
  }));
});
