import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { RouterTestingModule } from '@angular/router/testing';
import { ScannerPage } from './scanner.page';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';


describe('ScannerPage', () => {
  let component: ScannerPage;
  let fixture: ComponentFixture<ScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[QRScanner, HttpClient, HttpHandler, SQLite],
      declarations: [ ScannerPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
