import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccountPage } from '../account/account.page';
import { ContactPage } from '../contact/contact.page';
import { ScannerPage } from '../scanner/scanner.page';
import { CouponListPage } from '../coupon-list/coupon-list.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(),RouterTestingModule
        //.withRoutes([{path:'', component: HomePage},{path:'account', component: AccountPage}, {path:'contact', component: ContactPage},{path:'scanner', component: ScannerPage},{path:'coupon-list', component: CouponListPage}])
      ],
      declarations: [ HomePage ],
      providers:[],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
     expect(component).toBeTruthy();
   });

  it(' doit avoir le menu ', () => {
    const menu = fixture.debugElement.query(By.css('.text-menu')).nativeElement;
    expect(menu.innerHTML).not.toBeNull();
    // console.log(board.innerHTML)
    // REVOIR POUR COMPTER LE NOMBRE D'ELEMENT DANS LE MENU 
    //expect(menu.innerHTML.count()).toEqual(3);
    });

  it(' doit avoir le logo ', () => {
    const logo = fixture.debugElement.query(By.css('.logoNoir')).nativeElement;
    expect(logo.innerHTML).not.toBeNull();
    });

    // 
  // it( 'changement de d\'url au click',() =>{
  //   this.fixture.nativeElement.query(By.css('#account')).click();
  //   fixture.detectChanges();
  //   expect(Router).toEqual('/account');
  // })

});
