import { TestBed } from '@angular/core/testing';

import { CouponService } from './coupon.service';
import { HttpClientModule } from '@angular/common/http';

describe('CouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientModule]
    })
  });

  const service: CouponService = TestBed.get(CouponService);
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  let right_result = {
    "couponId": 1,
    "code_coupon": "FREE30",
    "discount": 30,
    "description": "30% de réduction",
    "date_debut": "2020-03-12T00:00:00.000Z",
    "date_fin": "2020-08-12T00:00:00.000Z"
  }

  let false_result = {
    "couponId": 1,
    "code_coupon": "FREE30",
    "discount": 50,
    "description": "50% de réduction",
    "date_debut": "2020-03-12T00:00:00.000Z",
    "date_fin": "2020-08-12T00:00:00.000Z"
  }

  it (" Doit retourner des donnée égale à rightResult ", () => {
    service.getCouponByCode("FREE30").subscribe(res => {
      expect(res).toEqual(right_result)
    })
  })

  it (" Doit retourner des donnée égale à rightResult ", () => {
    service.getCouponByCode("FREE30").subscribe(res => {
      expect(res).not.toEqual(false_result)
    })
  })


});
