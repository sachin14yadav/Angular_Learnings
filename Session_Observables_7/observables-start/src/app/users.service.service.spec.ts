/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Users.serviceService } from './users.service.service';

describe('Service: Users.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Users.serviceService]
    });
  });

  it('should ...', inject([Users.serviceService], (service: Users.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
