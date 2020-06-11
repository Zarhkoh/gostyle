import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  back = 'Back';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private sqlite: SQLite
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'gostyle.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('create table if not exists coupon(code_coupon VARCHAR(15),discount INTEGER, description VARCHAR(15),date_debut DATE,date_fin DATE)', [])
            .catch(e => console.log(e));
          db.executeSql(" INSERT or IGNORE INTO coupon (code_coupon,discount, description,date_debut,date_fin) VALUES ('TEST456',19,'19 % sur les pantalons','2020 / 01 / 24','2020 / 06 / 20')", [])
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  showFooterHeader() {
    if (this.router.url === '/home' || this.router.url === '/login') {
      return true;
    }
  }
}
