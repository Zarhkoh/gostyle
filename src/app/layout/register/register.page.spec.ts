import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterPage } from './register.page';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[HttpClient, HttpHandler],
      declarations: [ RegisterPage ],
      imports: [
        IonicModule.forRoot(), 
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
