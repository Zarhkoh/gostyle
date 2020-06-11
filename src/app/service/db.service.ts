import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite, private db: SQLiteObject) { }

  createDb() {
    console.log("CREATION BASE");
    this.sqlite.create({
      name: 'gostyle.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        console.log("CREATION TABLE");
        db.executeSql('create table if not exists coupon(code_coupon VARCHAR(15),discount INTEGER, description VARCHAR(15),date_debut DATE,date_fin DATE)', [])
          .catch(e => console.log("BUG CREATION TABLE", e));
        console.log("CREATION DONNEES");
        db.executeSql(" INSERT or IGNORE INTO coupon (code_coupon,discount, description,date_debut,date_fin) VALUES ('TEST456',19,'19 % sur les pantalons','2020 / 01 / 24','2020 / 06 / 20')", [])
          .catch(e => console.log("BUG INSERT DONNEE", e));
      })
      .catch(e => console.log("BUG CREATION DB", e));
    console.log("BASE CREEE");
  }

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
