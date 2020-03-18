import { TestBed } from '@angular/core/testing';

import { CompleteTestService } from './complete-test.service';

describe('CompleteTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompleteTestService = TestBed.get(CompleteTestService);
    expect(service).toBeTruthy();
  });
});
