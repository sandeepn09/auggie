import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { AlertController } from "@ionic/angular";
import { AuthRequest } from "../models/user/user-models";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"],
})
export class SigninPage implements OnInit {
  authForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  constructor(
    public alertController: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  save() {
    if (this.authForm.invalid) {
      console.log(this.authForm.value);
      this.presentAlert();
    } else {
      console.log(this.authForm.value);
      console.log("BD Form is VALID!!!!");
      const authReq: AuthRequest = this.authForm.value;
      this.authService.login(authReq);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error",
      // subHeader: 'Some fields have invalid values',
      message: "Please enter valid values to proceeed.",
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }
}
