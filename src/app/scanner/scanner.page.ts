import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AlertController } from '@ionic/angular';
import { CouponService } from '../service/coupon.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  couponsList;

  constructor(private qrScanner: QRScanner, public alertController: AlertController, private couponService: CouponService) {
    this.scancode();
  }

  scannedCodeText = 'none';
  ngOnInit() {
    this.checkifCodeIsValid();
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
            this.checkifCodeIsValid();
            this.presentAlert();
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
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

  async presentAlert() {
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

  checkifCodeIsValid() {
    this.couponService.getAllCoupons().subscribe((data) => this.couponsList = data);
    console.log("COUPONS: ", this.couponsList);
  }

}
