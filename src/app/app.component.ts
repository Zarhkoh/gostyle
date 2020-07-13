import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { DbService } from './service/db.service';


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
    private dbService: DbService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (!this.platform.is("desktop")) {
        console.log("Lancement autre que desktop");
        this.dbService.createDb();
        this.dbService.drop_db();
        console.log("Ajout tables");
        this.dbService.create_tables();
        console.log("EVERYTHING OK");
      }
    });
  }
  showFooterHeader() {
    if (this.router.url === '/home' || this.router.url === '/login') {
      return true;
    }
  }
}
