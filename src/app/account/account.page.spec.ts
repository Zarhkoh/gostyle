import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { AccountPage } from './account.page';

describe('AccountPage', () => {
  let component: AccountPage;
  let fixture: ComponentFixture<AccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it(' Le info du compte sont corrects  ', () => {
  //   const nom = fixture.debugElement.query(By.css('.nom')).nativeElement;
  //   const prenom = fixture.debugElement.query(By.css('.prenom')).nativeElement;
  //   const email = fixture.debugElement.query(By.css('.email')).nativeElement;
  //   expect(nom.innerHTML).not.toEqual("Nom:moreau");
  //   expect(prenom.innerHTML).not.toEqual("Prénom:justine");
  //   expect(email.innerHTML).not.toEqual("Adresse e-mail:justine.moreau@epsi.fr");
  //   });

});
