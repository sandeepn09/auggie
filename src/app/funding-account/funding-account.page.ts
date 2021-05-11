import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BankInfo } from "../models/user/payment-models";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-funding-account",
  templateUrl: "./funding-account.page.html",
  styleUrls: ["./funding-account.page.scss"],
})
export class FundingAccountPage implements OnInit {
  step = 1;

  bankInfo: BankInfo = {
    name: "",
    accountNumber: null,
    routingNumber: null,
    accountType: "",
    createDate: new Date(),
  };

  bdForm = new FormGroup({
    name: new FormControl("", Validators.required),
    accountNumber: new FormControl("", Validators.required),
    routingNumber: new FormControl("", Validators.required),
    accountType: new FormControl("", Validators.required),
  });

  constructor(public alertController: AlertController) {}

  save() {
    if (this.bdForm.invalid) {
      console.log(this.bdForm.value);
      this.presentAlert();
    } else {
      console.log(this.bdForm);
      console.log("BD Form is VALID!!!!");

    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      // subHeader: 'Some fields have invalid values',
      message: 'Please enter valid values to proceeed.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  ngOnInit() {}
}
