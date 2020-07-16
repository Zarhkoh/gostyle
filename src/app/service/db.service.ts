import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Coupon } from '../models/coupon';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  private storage: SQLiteObject;

  constructor(private sqlite: SQLite, private platform: Platform) {
    this.platform.ready().then(() => this.createDb()).catch(e => console.log("BUG?: ", JSON.stringify(e)));
  }

  createDb() {
    this.sqlite.create({
      name: 'gostyle.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.storage = db;
        console.log("DB CREATED");
      }).then(() => this.create_tables()).then(() => this.drop_db())
      .catch(e => console.log("BUG CREATION: ", JSON.stringify(e)));
  }

  addCoupon(coupon) {
    let data = [coupon.code_coupon, coupon.description, coupon.discount, coupon.date_debut, coupon.date_fin];
    console.log("nature, rdy to db:", data);
    this.storage.executeSql('INSERT INTO coupon (code_coupon,description,discount,date_debut,date_fin) VALUES (?,?,?,?,?)', data).then((data) => console.log(JSON.stringify(data)))
      .catch(e => console.log("BUG INSERT: ", JSON.stringify(e)));
  }

  deleteCouponByCode(couponCode) {
    console.log("dans le service delete pour:" + couponCode + ".")
    console.log("dans le service delete pour nouveau:" + couponCode + ".")
    this.storage.executeSql('DELETE FROM coupon WHERE code_coupon="' + couponCode + '"').then((data) => console.log(JSON.stringify(data)))
      .catch(e => console.log("BUG DELETE: ", JSON.stringify(e)));
  }

  getCouponsList() {
    let coupons: Coupon[] = [];
    this.storage.executeSql('SELECT * FROM coupon', []).then(res => {
      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          coupons.push({
            code_coupon: res.rows.item(i).code_coupon,
            discount: res.rows.item(i).discount,
            description: res.rows.item(i).description,
            date_debut: res.rows.item(i).date_debut,
            date_fin: res.rows.item(i).date_fin
          });
        }
      }
    });
    return coupons;
  }

  create_tables() {
    console.log("TABLE CREATION");
    this.storage.executeSql('create table if not exists coupon(code_coupon VARCHAR(15) PRIMARY KEY,discount INTEGER, description VARCHAR(15),date_debut DATE,date_fin DATE)', []).then(data => console.log("tables crées: ", data))
      .catch(e => console.log("BUG CREATION TABLES: ", JSON.stringify(e)));
    console.log("TABLE CEEE?");
  }
  drop_db() {
    console.log("TABLE DROP");
    this.storage.executeSql("DELETE FROM coupon")
      .catch(e => console.log("BUG TABLE DROP: ", JSON.stringify(e)));
    console.log("TABLE DROPPED");
  }

}
