import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { NorthwindRestService } from './northwind-rest.service';

describe('NorthwindRestService', () => {
  let service: NorthwindRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(NorthwindRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
