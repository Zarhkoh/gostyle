import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getCouponByCode(couponCode) {
    const params = {
      code_coupon: couponCode
    };
    return this.http.get(this.url + "/couponByCodeCoupon", { params });
  }

}
