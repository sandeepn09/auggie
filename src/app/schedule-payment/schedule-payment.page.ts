import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { CardInfo, PaymentSchedule } from "../models/user/payment-models";
import { AlertController, ModalController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";
import { AppConstants } from "../config/app-constants";
import { PaymentModalComponent } from "../shared/payment-modal/payment-modal.component";
import { MessageService } from "../services/message.service";
import { UserService } from "../services/user.service";
import { PaymentService } from "../services/payment.service";

@Component({
  selector: "app-schedule-payment",
  templateUrl: "./schedule-payment.page.html",
  styleUrls: ["./schedule-payment.page.scss"],
})
export class SchedulePaymentPage implements OnInit {
  paySchedule: PaymentSchedule = {
    providerId: 0,
    description: "",
    amount: 0,
    paymentDate: null,
    cardId: 0,
    recurring: false,
  };

  providerName: string;
  iconUrl:string;
  cardInfo: CardInfo;

  psForm = new FormGroup({
    providerId: new FormControl("", Validators.required),
    providerName: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    paymentDate: new FormControl("", Validators.required),
    cardId: new FormControl("", Validators.required),
    recurring: new FormControl("", Validators.required),
  });

  constructor(
    public alertController: AlertController,
    public activateRoute: ActivatedRoute,
    private modalController: ModalController,
    private messageService: MessageService,
    private userService: UserService,
    private paymentService: PaymentService
  ) {
    
  }

  async ngOnInit() {
    
    console.log("CARD INFO ON INIT XXXXX", this.cardInfo);
    const sp = this.activateRoute.snapshot.data["serviceProvider"];
    console.log("serviceProvider!!!!!,", sp);

    this.psForm.get("providerName").setValue(sp.providerDescription);
    this.psForm.get("providerId").setValue(sp.id);
    this.iconUrl = sp.iconUrl;

    console.log("LOGO", this.iconUrl);
    this.getCardInfo();
    
  }

  save() {
    if (this.psForm.invalid) {
      console.log(this.psForm.value);
      this.presentAlert();
    } else {
      this.paySchedule = this.psForm.value;
      console.log("Valid Pay schedule",this.paySchedule);
      
      this.presentModal();
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
    // console.log("BANK INFO", this.bankInfo);
    const acctType = AppConstants.YES_NO.get(this.paySchedule.recurring);
    console.log("Payschedule before conformation", this.paySchedule)

    const card = await this.userService.getCardDetails() as CardInfo;

    let props = {...this.paySchedule, ...{iconUrl:this.iconUrl, cardNumber: card.cardNumber} };
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: "confirm-modal",
      componentProps: props,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log(role);

    if (role === "confirm") {
      console.log("SCHED PAY", role);
      console.log("Payschedule after conformation", this.paySchedule)
      // this.paymentService.addFundingAccount(this.bdForm.value);
      this.paymentService.schedulePayment(this.paySchedule);
    }
  }

  async getCardInfo() {
   this.cardInfo = await this.userService.getCardDetails() as CardInfo;
  }
  
}
