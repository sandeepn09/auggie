import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActionSheetController } from "@ionic/angular";
import {
  PaymentSchedule,
  ServiceProvider,
} from "src/app/models/user/payment-models";
import { EventService } from "src/app/services/event.service";
import { MessageService } from "src/app/services/message.service";
import { PaymentService } from "src/app/services/payment.service";
import { ProviderService } from "src/app/services/provider.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  transactions1 = [
    {
      providerName: "Netflix",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/41d05924a6fd481.png",
    },
    {
      providerName: "Hulu",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/e7a1ac57ae64452.png",
    },
    {
      providerName: "Netflix",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/41d05924a6fd481.png",
    },
    {
      providerName: "Hulu",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/e7a1ac57ae64452.png",
    },
    {
      providerName: "Netflix",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/41d05924a6fd481.png",
    },
    {
      providerName: "Hulu",
      amount: 25.0,
      payDate: new Date(),
      iconUrl: "https://assets.brandfetch.io/e7a1ac57ae64452.png",
    },
  ];

  transactions = [];

  paymentSchedules: PaymentSchedule[];
  providers: ServiceProvider[];

  constructor(
    private userService: UserService,
    private paymentService: PaymentService,
    private providerService: ProviderService,
    public actionSheetController: ActionSheetController,
    private router: Router,
    private messageService: MessageService,
    private events: EventService
  ) {}

  ngOnInit() {
    this.initData();

    this.events.subscribe("bill:added", (data: any) => {
      console.log("TransactionsComponent Bill added event", data, "at", data.time);
      this.initData();
    });
  }

  async initData() {
    this.paymentSchedules =
      (await this.paymentService.getScheduledPayments()) as PaymentSchedule[];
    console.log("SchedPaysComponent paymentSchedules", this.paymentSchedules);

    this.providers =
      (await this.providerService.getAllProviders()) as ServiceProvider[];
    console.log("SchedPaysComponent", this.providers);
  }

  getProviderName(id: number) {
    if (this.providers) {
      const temp = this.providers.filter((object) => {
        return object["id"] == id;
      });

      console.log("ProviderName", temp[0].providerName);

      return temp[0].providerName;
    }

    return "NA";
  }

  getIconUrl(id: number) {
    if (this.providers) {
      const temp = this.providers.filter((object) => {
        return object["id"] == id;
      });

      console.log("iconUrl", temp[0].iconUrl);

      return temp[0].iconUrl;
    }

    return "";
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Payment",
      cssClass: "custom-action-sheet",
      buttons: [
        {
          text: "Details",
          icon: "open-outline",
          handler: () => {
            console.log("Details clicked");
            this.warnUnknownPayment();
          },
        },
        {
          text: "Cancel Payment",
          role: "destructive",
          icon: "remove-circle-outline",
          handler: () => {
            console.log("Delete clicked");
          },
        },
      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  addPayments() {
    this.router.navigateByUrl("/add-payment");
  }

  warnUnknownPayment() {
    this.messageService.warn(
      "Unknown Payment",
      "We don't recognize this payment. If you used the Augie card for payments, make sure you set up the Bill pay in the App",
      null,
      "OK",
      false
    );
  }
}
