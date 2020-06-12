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
    this.getCouponList();
    this.getLocalCouponList();
  }

  getCouponList() {
    console.log('début fonction get');
    this.couponList = this.couponService.getAllCoupons().subscribe((data) => this.couponList = data);
    console.log('les coupons:' + this.couponList);
  }

  getLocalCouponList() {
    this.couponList = this.dbService.getCouponsList();
    console.log('les coupons locaux:' + this.couponList);
  }

  addCoupon() {
    console.log("service ajour data");
    let test = this.dbService.inset_coupon_data();
    console.log("fin ajout data: ");
  }
}
