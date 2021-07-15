import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { MessageService } from "../services/message.service";
import { UserService } from "../services/user.service";
import { Payment, PaymentSchedule } from "../models/user/payment-models";
import { PaymentService } from "../services/payment.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-bank-transactions",
  templateUrl: "./bank-transactions.page.html",
  styleUrls: ["./bank-transactions.page.scss"],
})
export class BankTransactionsPage implements OnInit {
  name: string;
  
  payments: Payment[];
  PaymentSchedules: PaymentSchedule[];

  hasBanks: boolean = false;
  hasCards: boolean = false;
  isProfileComplete: boolean = false;
  bankName:string;
  accountNum: number;

  constructor(
    private userService: UserService,
    public alertController: AlertController,
    private messageService: MessageService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.name = (await this.userService.getFirstname()) + "'s";
    this.payments = await this.paymentService.getBankPayments();
    const bank = await this.userService.getBank();
    this.bankName = bank.bankName;
    this.accountNum = bank.accountNumber%10000;
    console.log("Bank from server", this.accountNum);
    console.log("Payments from server", this.payments);
  }

  async trasnactionUpdate(event) {
    console.log("trasnactionUpdate", event.target.checked);
    if (event.target.checked == false) {
      const result = await this.messageService.confirm(
        "Confirm",
        "By unchecking this box you are confirming that you no longer want Augie to be charged for this transaction",
        null,
        "confirm"
      );

      if (!result) {
        event.target.checked = true;
      }
    } else {
      // this.presentAlert(event);
    }
  }

  async presentAlert(event: any) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message:
        "By unchecking this box you are confirming that you no longer want the Augie Card to be used to pay this bill",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
            event.target.checked = true;
          },
        },
        {
          text: "Confirm",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async presentCancelAlert(event: any) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message:
        "By unchecking this box you are confirming that you no longer want Augie to be charged for this transaction",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {
            console.log("Confirm Cancel: blah");
            event.target.checked = true;
          },
        },
        {
          text: "Confirm",
          handler: () => {
            console.log("Confirm Okay");
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async save() {
    this.payments.forEach((obj: any) => {
      obj.paymentDate =
        new DatePipe("en-US").transform(
          obj.paymentDate,
          "yyyy-MM-ddTHH:mm:ss"
        ) + ".000Z";
      delete obj.createdAt;
      delete obj.updatedAt;
    });

    console.log("Updated Bank Payments", this.payments);
    this.paymentService.postPayment(this.payments, "/bill-history");
    
  }
}
