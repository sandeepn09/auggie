import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { AuthRequest } from "../models/user/user-models";
import { AuthService } from "../services/auth.service";
import { LoadingService } from "../services/loading.service";
import { MessageService } from "../services/message.service";
import { PasswordResetComponent } from "../shared/password-reset/password-reset.component";
import { SigninHelpComponent } from "../shared/signin-help/signin-help.component";
import { VcodeComponent } from "../shared/vcode/vcode.component";
import { VerMessageComponent } from "../shared/ver-message/ver-message.component";

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

  helpEmail: any;

  constructor(
    public alertController: AlertController,
    private authService: AuthService,
    public modalController: ModalController,
    private toastController: ToastController,
    private loadingService: LoadingService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  save() {
    if (this.authForm.invalid) {
      this.authForm.markAllAsTouched();
      console.log(this.authForm.value);
      this.presentAlert();
    } else {
      // this.loadingService.presentLoading("Signin in...")
      console.log(this.authForm.value);
      console.log("BD Form is VALID!!!!");
      const authReq: AuthRequest = this.authForm.value;
      this.authService.login(authReq);
      // this.loadingService.dismissLoading();
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

  async signinHelp() {
    const modal = await this.modalController.create({
      component: SigninHelpComponent,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      this.helpEmail = info.email;

      console.log("helpEmail", this.helpEmail.email);
      const success = await this.authService.sendVerificationCode(
        this.helpEmail.email
      );
      console.log("Vercode success", success);
      if (success == true) {
        this.showVerCodeModal();
      } else {
        this.presentToast("Error sending verification code");
      }
    }
  }

  async showVerCodeModal() {
    const modal = await this.modalController.create({
      component: VcodeComponent,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Vercode info", info);
    if (role === "confirm") {
      const success = await this.authService.verfifyCode(
        this.helpEmail,
        info.code
      );
      if (success == true) {
        this.passwordResetModal();
      } else {
        this.presentToast("Verification failed");
      }
    }
  }

  async passwordResetModal() {
    const modal = await this.modalController.create({
      component: PasswordResetComponent,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Password Info", info);

    if (role === "confirm") {
      const result = await this.authService.resetPassword(
        this.helpEmail.email,
        info.password
      );

      if (result && result == true)
        this.messageService.message(
          "Success!",
          "Your password has been reset!",
          null,
          "OK",
          false
        );
    }
  }

  resetPassword() {
    this.authService.resetPassword("sandeep@getaugie.com", "tttttt");
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "danger",
    });
    toast.present();
  }
}
