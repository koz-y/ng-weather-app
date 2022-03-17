import { TestBed } from '@angular/core/testing';

import { RetultsService } from './results.service';

describe('RetultsService', () => {
  let service: RetultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
