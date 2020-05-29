import { Component, OnInit } from '@angular/core';
import { CouponService } from '../service/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.page.html',
  styleUrls: ['./coupon-list.page.scss'],
})
export class CouponListPage implements OnInit {

  couponList;

  constructor(private couponService: CouponService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getCouponList();
  }

  getCouponList() {
    console.log('début fonction get');
    this.couponList = this.couponService.getAllCoupons().subscribe((data) => this.couponList = data);
    console.log('les coupons:' + this.couponList);
  }


}
