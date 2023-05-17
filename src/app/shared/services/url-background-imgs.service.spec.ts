import { TestBed } from '@angular/core/testing';

import { UrlBackgroundImgsService } from './url-background-imgs.service';

describe('UrlBackgroundImgsService', () => {
  let service: UrlBackgroundImgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlBackgroundImgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
