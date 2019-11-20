import { TestBed } from '@angular/core/testing';

import { SiblingDataService } from './sibling-data.service';

describe('SiblingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SiblingDataService = TestBed.get(SiblingDataService);
    expect(service).toBeTruthy();
  });
});
