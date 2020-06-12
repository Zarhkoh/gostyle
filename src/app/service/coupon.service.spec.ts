import { TestBed } from '@angular/core/testing';

import { CouponService } from './coupon.service';
import { HttpClientModule } from '@angular/common/http';

describe('CouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    })
  });

  it('should be created', () => {
    const service: CouponService = TestBed.get(CouponService);
    expect(service).toBeTruthy();
  });
});
