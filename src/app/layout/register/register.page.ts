import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private creationForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastController: ToastController) { }

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
    if (this.creationForm) {
      console.log(this.creationForm.value);
      this.userService
        .setRegister(this.creationForm.value)
        .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    };
  };

  handleSuccess(data) {
    this.presentSuccessToast("Compte créé avec succès");
    this.router.navigate(['/auth']);
  }

  handleError(error) {
    this.presentErrorToast(error.error.erreur);
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
