import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  private creationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  createUser() {
    if(this.creationForm) {
      console.log(this.creationForm.value);
      this.userService
      .setRegister(this.creationForm.value)
      .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    };
  };

  handleSuccess(data) {
    console.log('user created', data);
    this.router.navigate(['/home']);
  }

  handleError(error) {
    console.error('KO user created', error);
  }

}
