import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BankInfo } from "../models/user/payment-models";
import { AlertController, ModalController } from "@ionic/angular";
import { BankModalComponent } from "../shared/bank-modal/bank-modal.component";
import { PaymentService } from "../services/payment.service";
import { AppConstants } from "../config/app-constants";
import { LoadingService } from "../services/loading.service";
import { AuthService } from "../services/auth.service";

@Component({
  selector: "app-funding-account",
  templateUrl: "./funding-account.page.html",
  styleUrls: ["./funding-account.page.scss"],
})
export class FundingAccountPage implements OnInit {
  step = 1;

  bankInfo: BankInfo = {
    bankName: "",
    accountNumber: null,
    routingNumber: null,
    accountType: "",
    createDate: new Date(),
    verified: false,
  };

  bdForm = new FormGroup({
    bankName: new FormControl("", Validators.required),
    // description: new FormControl("", Validators.required),
    accountNumber: new FormControl("", Validators.required),
    routingNumber: new FormControl("", Validators.required),
    accountType: new FormControl("", Validators.required),
  });

  constructor(
    public alertController: AlertController,
    public modalController: ModalController,
    private paymentService: PaymentService,
    private loadingService: LoadingService,
    private authService: AuthService
  ) {}

  save() {
    if (this.bdForm.invalid) {
      console.log(this.bdForm.value);
      this.presentAlert();
    } else {
      console.log(this.bdForm);
      console.log("BD Form is VALID!!!!");
      this.bankInfo = this.bdForm.value;
      this.presentModal();
      this.authService.refreshUser();
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

  ngOnInit() {}

  async presentModal() {
    console.log("BANK INFO", this.bankInfo);
    const acctType = AppConstants.ACCT_TYPE.get(this.bankInfo.accountType);

    const modal = await this.modalController.create({
      component: BankModalComponent,
      cssClass: "confirm-modal",
      componentProps: { ...this.bankInfo, ...{ acctType: acctType } },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log(role);

    if (role === "confirm") {
      await this.loadingService.presentLoading("Adding Bank account...");

      await this.paymentService.addFundingAccount(this.bdForm.value, "/payments");
  
      await this.loadingService.dismissLoading();
    }
    else if (role === "add-card") {
      await this.loadingService.presentLoading("Adding Bank account...");

      await this.paymentService.addFundingAccount(this.bdForm.value, "/create-card");
  
      await this.loadingService.dismissLoading();
    }
  }
}
