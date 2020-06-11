import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite, private db: SQLiteObject) { }

  getCouponList() {
    return this.db.executeSql('SELECT * FROM coupon', []);
  }

  addCoupon(code, discount, description, dateDebut, dateFin) {
    return this.db.executeSql('INSERT INTO coupon (code_coupon,discount,description,date_debut,date_fin) VALUES (?,?,?,?,?)', [code, discount, description, dateDebut, dateFin]);
  }
  getCouponsListTest() {
    console.log("getCouponsListTest called");
    let res = this.db.executeSql('SELECT * FROM coupon', []);
    console.log(res);
    // let res = this.db.executeSql('SELECT * FROM coupon', []).then(res => {
    //   console.log(res);
    //   let coupons: Coupon[] = [];
    //   if (res.rows.length > 0) {
    //     for (let i = 0; i < res.rows.length; i++) {
    //       coupons.push({
    //         code_coupon: res.rows.item(i).code_coupon,
    //         discount: res.rows.item(i).discount,
    //         description: res.rows.item(i).description,
    //         date_debut: res.rows.item(i).date_debut,
    //         date_fin: res.rows.item(i).date_fin
    //       });
    //     }
    //   }
    //   this.couponList.next(coupons);
    // });
    // return this.couponList;
  }

}
