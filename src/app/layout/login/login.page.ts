import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private creationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  loginUser() {
    if (this.creationForm) {
      this.userService
        .setLogin(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    }
  }

  handleSuccess(data) {
    localStorage.setItem('token', data.token);
    this.router.navigate(['/home']);
    this.presentSuccessToast("Connexion réussie !");
  }

  handleError(error) {
    this.presentErrorToast("Identifiants incorrects!");
    console.error('Identifiant inccorrect', error);
  }

  async presentSuccessToast(msg) {
    const toast = await this.toastController.create({
      color: 'success',
      message: msg,
      position: 'top',
      animated: true,
      duration: 2000
    });
    toast.present();
  }
  async presentErrorToast(msg) {
    const toast = await this.toastController.create({
      color: 'danger',
      position: 'top',
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
