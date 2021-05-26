import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  PopoverController,
  ToastController,
} from "@ionic/angular";

import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ValidationPopoverComponent } from "../shared/validation-popover/validation-popover.component";
import { HttpService } from "../services/http.service";
import { HttpHeaders } from "@angular/common/http";
import { AppResponse } from "../models/user/user-models";
import { Router } from "@angular/router";
import { SignupConfirmComponent } from "../shared/signup-confirm/signup-confirm.component";
import { MessageService } from "../services/message.service";

const headers = new HttpHeaders()
  .set("content-type", "application/json")
  .set("Access-Control-Allow-Origin", "*");

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  regForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    username: new FormControl("", [
      Validators.required,
      Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}"),
    ]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    public toastController: ToastController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    private httpService: HttpService,
    private router: Router,
    private modalController: ModalController,
    private messageService: MessageService
  ) {}

  currentPopover = null;

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Your settings have been saved.",
      duration: 2000,
      color: "#00bfa6",
      position: "middle",
    });
    toast.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: ValidationPopoverComponent,
      cssClass: "my-custom-class",
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  save() {
    if (this.regForm.invalid) {
      console.log(this.regForm.value);
      this.presentAlert();
    } else {
      console.log(this.regForm.value);
      console.log("BD Form is VALID!!!!");
      this.httpService
        .post("user/account", this.regForm.value, headers)
        .subscribe((res) => {
          console.log("Sign up response", res);

          let appResponse: AppResponse = res as AppResponse;
          if (appResponse.code && appResponse.code == 2503) {
            console.log("AppResponse: ", appResponse);

            // this.presentModal();
            this.messageService.message(
              "Welcome!",
              "Signin and start building your credit!",
              "/signin"
            );
          }
        });
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: SignupConfirmComponent,
      cssClass: "modal-ctr",
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      this.router.navigateByUrl("/signin");
    }
  }
}
