import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterTestingModule } from '@angular/router/testing';
import { CouponListPage } from './coupon-list.page';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';


describe('CouponListPage', () => {
  let component: CouponListPage;
  let fixture: ComponentFixture<CouponListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler,SQLite],
      declarations: [ CouponListPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CouponListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
