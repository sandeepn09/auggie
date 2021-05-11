import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { PaymentSchedule } from "../models/user/payment-models";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-schedule-payment",
  templateUrl: "./schedule-payment.page.html",
  styleUrls: ["./schedule-payment.page.scss"],
})
export class SchedulePaymentPage implements OnInit {
  paySchedule: PaymentSchedule = {
    providerName: "",
    description: "",
    amount: 0,
    payDate: null,
    payMethod: "",
    recurring: false,
  };

  psForm = new FormGroup({
    providerName: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    payDate: new FormControl("", Validators.required),
    payMethod: new FormControl("", Validators.required),
    recuring: new FormControl("", Validators.required),
  });

  constructor(public alertController: AlertController) {}

  ngOnInit() {}

  save() {
    if (this.psForm.invalid) {
      console.log(this.psForm.value);
      this.presentAlert();
    } else {
      console.log(this.psForm);
      console.log("BD Form is VALID!!!!");
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
