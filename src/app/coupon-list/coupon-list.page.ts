import { Component, OnInit } from '@angular/core';
import { CouponService } from '../service/coupon.service';
import { DbService } from '../service/db.service';
import { Platform } from '@ionic/angular';

import { Coupon } from '../models/coupon';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.page.html',
  styleUrls: ['./coupon-list.page.scss'],
})
export class CouponListPage implements OnInit {

  couponsList: Coupon[];

  constructor(private couponService: CouponService, private dbService: DbService, private platform: Platform,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    if (!this.platform.is("desktop")) {
      this.getLocalCouponList();
    }
  }

  getLocalCouponList() {
    this.couponsList = this.dbService.getCouponsList();
  }
}
