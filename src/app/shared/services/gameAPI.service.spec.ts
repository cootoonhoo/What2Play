import { TestBed } from '@angular/core/testing';

import { GameAPIService } from './gameAPI.service';

describe('GameService', () => {
  let service: GameAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
