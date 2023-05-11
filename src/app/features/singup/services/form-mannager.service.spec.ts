import { TestBed } from '@angular/core/testing';

import { FormMannagerService } from './form-mannager.service';

describe('FormMannagerService', () => {
  let service: FormMannagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormMannagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
