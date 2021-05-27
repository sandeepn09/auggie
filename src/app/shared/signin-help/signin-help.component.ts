import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { AlertController, ModalController } from "@ionic/angular";
import { AuthRequest } from "src/app/models/user/user-models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signin-help",
  templateUrl: "./signin-help.component.html",
  styleUrls: ["./signin-help.component.scss"],
})
export class SigninHelpComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    password2: new FormControl("", Validators.required),
  });

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  reset() {
    console.log("Reset Request", this.authForm.value);
    console.log("Password reser form valid", this.authForm.valid);

    if (this.authForm.invalid) {
      this.presentAlert("Please enter valid values to proceeed.");
    } else {
      if (
        this.authForm.get("password").value !=
        this.authForm.get("password2").value
      ) {
        this.presentAlert("Retyped password does not match the original");
      } else {
        delete this.authForm.value.password2;
        const authReq: AuthRequest = this.authForm.value;
        this.authService.resetPassword(authReq);
      }
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error",
      // subHeader: 'Some fields have invalid values',
      message: message,
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }
}
