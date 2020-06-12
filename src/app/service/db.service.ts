import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Coupon } from '../models/coupon';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  public db: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  createDb() {
    this.sqlite.create({
      name: 'gostyle.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
      })
      .catch(e => console.log(e));
  }

  getCouponList() {
    return this.db.executeSql('SELECT * FROM coupon', []);
  }

  addCoupon(code, discount, description, dateDebut, dateFin) {
    return this.db.executeSql('INSERT INTO coupon (code_coupon,discount,description,date_debut,date_fin) VALUES (?,?,?,?,?)', [code, discount, description, dateDebut, dateFin]);
  }

  getCouponsListTest() {
    console.log("getCouponsListTest called");
    return this.db.executeSql('SELECT * FROM coupon', []).then(res => {
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
      } else {
        console.log("pas de coupons");
        return "pas de coupons";
      }
      return coupons;
    });
    return null;
  }
  create_tables() {
    console.log("TABLE CREATION");
    this.db.executeSql(" INSERT INTO coupon (code_coupon,discount, description,date_debut,date_fin) VALUES ('TEST456',19,'19 % sur les pantalons','2020 / 01 / 24','2020 / 06 / 20')", [])
      .catch(e => console.log(e));
    console.log("TABLE CEEE?");
  }
  drop_db() {
    console.log("TABLE DROP");
    this.db.executeSql("DELETE FROM coupon", [])
      .catch(e => console.log(e));
    console.log("TABLE DROPPED");
  }
  inset_coupon_data() {
    console.log("DATA INSERT");
    this.db.executeSql('create table if not exists coupon(code_coupon VARCHAR(15) PRIMARY KEY,discount INTEGER, description VARCHAR(15),date_debut DATE,date_fin DATE)', [])
      .catch(e => console.log(e));
    console.log("DATA INSERT");
  }
}
