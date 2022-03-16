import { TestBed } from '@angular/core/testing';

import { RetultsService } from './retults.service';

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
