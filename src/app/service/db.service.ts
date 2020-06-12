import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Coupon } from '../models/coupon';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  private database: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  createDb() {
    this.sqlite.create({
      name: 'gostyle.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database = db;
      })
      .catch(e => console.log(e));
  }


  addCoupon(code, discount, description, dateDebut, dateFin) {
    return this.database.executeSql('INSERT INTO coupon (code_coupon,discount,description,date_debut,date_fin) VALUES (?,?,?,?,?)', [code, discount, description, dateDebut, dateFin]);
  }

  getCouponsList() {
    console.log("getCouponsListTest called");
    this.database.executeSql('SELECT * FROM coupon', []).then(res => {
      let coupons: Coupon[] = [];
      if (res.rows.length > 0) {
        console.log("ITEMS: " + JSON.stringify(res.rows));
        for (let i = 0; i < res.rows.length; i++) {
          console.log("ITEM: " + JSON.stringify(res.rows.item(i)));
          coupons.push({
            code_coupon: res.rows.item(i).code_coupon,
            discount: res.rows.item(i).discount,
            description: res.rows.item(i).description,
            date_debut: res.rows.item(i).date_debut,
            date_fin: res.rows.item(i).date_fin
          });
        }
      }
      return coupons;
    });
  }

  create_tables() {
    console.log("TABLE CREATION");
    this.database.executeSql('create table if not exists coupon(code_coupon VARCHAR(15) PRIMARY KEY,discount INTEGER, description VARCHAR(15),date_debut DATE,date_fin DATE)', []).then(data => console.log(data))
      .catch(e => console.log(e));
    console.log("TABLE CEEE?");
  }
  drop_db() {
    console.log("TABLE DROP");
    this.database.executeSql("DELETE FROM coupon", [])
      .catch(e => console.log(e));
    console.log("TABLE DROPPED");
  }
  inset_coupon_data() {
    this.database.executeSql(" INSERT INTO coupon (code_coupon,discount, description,date_debut,date_fin) VALUES ('TEST456',19,'19 % sur les pantalons','2020 / 01 / 24','2020 / 06 / 20')", []).then(data => console.log(data))
      .catch(e => console.log(e));
  }

}
