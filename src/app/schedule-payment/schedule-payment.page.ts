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
import { EventService } from "../services/event.service";

@Component({
  selector: "app-schedule-payment",
  templateUrl: "./schedule-payment.page.html",
  styleUrls: ["./schedule-payment.page.scss"],
})
export class SchedulePaymentPage implements OnInit {
  paySchedule: PaymentSchedule = {
    providerId: 0,
    amount: 0,
    paymentDate: null,
    providerName: "",
    bankPaymentId: 0
  };

  providerName: string;
  iconUrl: string;

  psForm = new FormGroup({
    providerId: new FormControl("", Validators.required),
    providerName: new FormControl("", Validators.required),
    amount: new FormControl("", Validators.required),
    paymentDate: new FormControl("", Validators.required),
  });

  constructor(
    public alertController: AlertController,
    public activateRoute: ActivatedRoute,
    private modalController: ModalController,
    private messageService: MessageService,
    private userService: UserService,
    private paymentService: PaymentService,
    private events: EventService
  ) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    const sp = this.activateRoute.snapshot.data["serviceProvider"];
    console.log("serviceProvider!!!!!,", sp);

    this.psForm.get("providerName").setValue(sp.providerDescription);
    this.psForm.get("providerId").setValue(sp.id);
    this.iconUrl = sp.iconUrl;

    console.log("LOGO", this.iconUrl);
  }

  async save() {
    // this.psForm.get('cardId').setValue(this.cardInfo.id);

    if (this.psForm.invalid) {
      console.log(this.psForm.value);
      this.psForm.markAllAsTouched();
      this.presentAlert();
    } else {
      this.paySchedule = this.psForm.value;
      console.log("Valid Pay schedule", this.paySchedule);

      await this.presentModal();
      this.publishBillAddedEvent();
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
    console.log("Payschedule before confirmation", this.paySchedule);

    const card = (await this.userService.getCardDetails()) as CardInfo;

    let props = {
      ...this.paySchedule,
      ...{ iconUrl: this.iconUrl },
    };
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
      console.log("Payschedule after conformation", this.paySchedule);
      // this.paymentService.addFundingAccount(this.bdForm.value);
      this.paymentService.schedulePayment(this.paySchedule, "/payments");
    } else if (role === "add-bank") {
      console.log("SCHED PAY", role);
      console.log("Payschedule after conformation", this.paySchedule);
      // this.paymentService.addFundingAccount(this.bdForm.value);
      this.paymentService.schedulePayment(this.paySchedule, "/funding-account");
    }
  }

  async getCardInfo() {
    // this.cardInfo = await this.userService.getCardDetails() as CardInfo;
  }

  publishBillAddedEvent() {
    this.events.publish("bill:added", {
      data: null,
      time: new Date(),
    });
  }
}
