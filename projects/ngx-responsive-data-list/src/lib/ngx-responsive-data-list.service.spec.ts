import { TestBed } from '@angular/core/testing';

import { NgxResponsiveDataListService } from './ngx-responsive-data-list.service';

describe('NgxResponiveDataListService', () => {
  let service: NgxResponsiveDataListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxResponsiveDataListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
