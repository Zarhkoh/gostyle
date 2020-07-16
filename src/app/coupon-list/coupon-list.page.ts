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
  showAccordion;

  couponsList: Coupon[] = [];

  constructor(private couponService: CouponService, private dbService: DbService, private platform: Platform,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    if (!this.platform.is("desktop")) {
      this.getLocalCouponList();
    } else {
      // this.couponsList = [
      //   { code_coupon: "FREE30", discount: 30, description: "30% Sur Jérémy", date_debut: new Date("2020-08-12T00:00:00.000Z"), date_fin: new Date("2020-08-30T00:00:00.000Z") },
      //   { code_coupon: "FREE40", discount: 40, description: "40% Sur Jérémy", date_debut: new Date("2020-09-12T00:00:00.000Z"), date_fin: new Date("2020-08-28T00:00:00.000Z") },
      //   { code_coupon: "FREE50", discount: 50, description: "50% Sur Jérémy", date_debut: new Date("2020-10-12T00:00:00.000Z"), date_fin: new Date("2020-08-30T00:00:00.000Z") }
      // ]
    }
  }

  getLocalCouponList() {
    this.couponsList = this.dbService.getCouponsList();
  }
  deleteCouponFromLocalList(couponCode) {
    this.dbService.deleteCouponByCode(couponCode);
  }

  setShowAccordion(data) {
    this.showAccordion = data;
  }
}
