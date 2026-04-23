import { TestBed } from '@angular/core/testing';

import { ContextWatchService } from './context-watch-service';

describe('ContextWatchService', () => {
  let service: ContextWatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContextWatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
