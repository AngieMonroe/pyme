import { TestBed } from '@angular/core/testing';

import { ConectionDataService } from './conection-data.service';

describe('ConectionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConectionDataService = TestBed.get(ConectionDataService);
    expect(service).toBeTruthy();
  });
});
