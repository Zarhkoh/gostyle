import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url = 'http://zarhkoh:3000';

  constructor(private http: HttpClient) { }

  getCouponByCode(couponCode) {
    const params = {
      code_coupon: couponCode
    };
    return this.http.get(this.url + "/couponByCodeCoupon", { params });
  }

}
