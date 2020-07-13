import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { CouponService } from '../service/coupon.service';
import { Coupon } from '../models/coupon';
import { DbService } from '../service/db.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  couponsList: Coupon[] = [];
  constructor(private qrScanner: QRScanner, public alertController: AlertController, private couponService: CouponService, private dbService: DbService, private router: Router) {
    this.scancode();
  }
  tempo;
  scannedCodeText = 'none';
  ngOnInit() {
  }

  scancode() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          this.qrScanner.show();
          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.scannedCodeText = text;
            if (text.startsWith("GoStyle")) {
              try {
                this.checkifCodeIsValid(this.scannedCodeText.slice(7));
                this.qrScanner.hide(); // hide camera preview
                scanSub.unsubscribe(); // stop scanning
              } catch{
                this.presentFailAlert("Ce code n'est pas/plus valide !");
              }
              this.presentOkAlert();
            } else {
              this.presentFailAlert("Ce code n'est pas un code promo GoStyle !");
            }
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
  async presentFailAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Code Erroné!',
      message: msg,
      buttons: [{
        text: 'Réessayer',
        cssClass: 'secondary',
        handler: () => {
          this.scancode();
        }
      },
      {
        text: 'Annuler',
        cssClass: 'secondary',
        handler: () => {
          this.qrScanner.destroy();
          return this.router.navigate(['/home']);
        }
      }]
    });
    await alert.present();
  }

  async presentOkAlert() {
    const alert = await this.alertController.create({
      header: 'Code trouvé!',
      subHeader: 'Text scanné:',
      message: this.scannedCodeText,
      buttons: [{
        text: 'Encore!',
        cssClass: 'secondary',
        handler: () => {
          this.scancode();
        }
      }]
    });
    await alert.present();
  }

  checkifCodeIsValid(code) {
    console.log('check if ' + code + 'valide');
    try {
      this.couponService.getCouponByCode(code).subscribe((data) => {
        this.tempo = data;
        console.log("SEND TO ENREGISTREMENT: ", data);
        this.dbService.addCoupon(this.tempo);
        return true;
      });
    } catch{
      return false;
    }
  }
}
