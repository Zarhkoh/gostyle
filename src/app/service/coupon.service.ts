import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CouponService {

  url = 'localhost:3000/api/coupons';

  constructor(private http: HttpClient) { }

  getAllCoupons() {
    return this.http.get(this.url);
  }
}
