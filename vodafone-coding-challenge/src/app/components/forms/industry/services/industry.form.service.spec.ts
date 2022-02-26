import { TestBed } from '@angular/core/testing';

import { IndustryFormService } from './industry.form.service';

describe('IndustryFormService', () => {
  let service: IndustryFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndustryFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
