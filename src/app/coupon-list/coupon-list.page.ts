import { Component, OnInit } from '@angular/core';
import { CouponService } from '../service/coupon.service';
import { DbService } from '../service/db.service';


@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.page.html',
  styleUrls: ['./coupon-list.page.scss'],
})
export class CouponListPage implements OnInit {

  couponList;

  constructor(private couponService: CouponService, private dbService: DbService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getLocalCouponList();
  }

  getCouponList() {
    console.log('début fonction get');
    this.couponList = this.couponService.getAllCoupons().subscribe((data) => this.couponList = data);
    console.log('les coupons:' + this.couponList);
  }

  getLocalCouponList() {
    console.log("GET COUPONLIST");
    this.couponList = this.dbService.getCouponsListTest();
    console.log('les coupons:' + this.couponList);
  }

}
