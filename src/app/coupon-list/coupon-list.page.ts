import { Component, OnInit } from '@angular/core';
import { CouponService } from '../service/coupon.service';
import { DbService } from '../service/db.service';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.page.html',
  styleUrls: ['./coupon-list.page.scss'],
})
export class CouponListPage implements OnInit {

  couponList;
  couponsList;

  constructor(private couponService: CouponService, private dbService: DbService, private platform: Platform,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.getCouponList();
    if (!this.platform.is("desktop")) {
      this.getLocalCouponList();
    }
  }

  getCouponList() {
    console.log('début fonction get');
    this.couponsList = this.couponService.getAllCoupons().subscribe((data) => this.couponsList = data);
    console.log('les coupons:' + this.couponsList);
  }

  getLocalCouponList() {
    this.couponList = this.dbService.getCouponsList();
    console.log('les coupons locaux:' + this.couponList);
  }

  addCoupon() {
    console.log("service ajout data");
    let test = this.dbService.inset_coupon_data();
    console.log("fin ajout data: ");
  }
}
