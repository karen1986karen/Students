import { TestBed } from '@angular/core/testing';

import { MyServService } from './my-serv.service';

describe('MyServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyServService = TestBed.get(MyServService);
    expect(service).toBeTruthy();
  });
});
