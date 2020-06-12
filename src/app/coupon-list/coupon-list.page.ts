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

  getLocalCouponList() {
    this.couponList = this.dbService.getCouponsList();
    console.log('les coupons locaux:' + this.couponList);
  }

  addCoupon() {
    console.log("service ajour data");
    this.dbService.inset_coupon_data();
    console.log("fin ajout data: ");
  }
}
