import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";
import {
  PaymentSchedule,
  ServiceProvider,
} from "src/app/models/user/payment-models";
import { PaymentService } from "src/app/services/payment.service";
import { ProviderService } from "src/app/services/provider.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-transactions",
  templateUrl: "./transactions.component.html",
  styleUrls: ["./transactions.component.scss"],
})
export class TransactionsComponent implements OnInit {
  transactions = [
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

  paymentSchedules: PaymentSchedule[];
  providers: ServiceProvider[];

  constructor(
    private userService: UserService,
    private paymentService: PaymentService,
    private providerService: ProviderService,
    public actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {
    this.initData();
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
    const temp = this.providers.filter((object) => {
      return object["id"] == id;
    });

    console.log("ProviderName", temp[0].providerName);

    return temp[0].providerName;
  }

  getIconUrl(id: number) {
    const temp = this.providers.filter((object) => {
      return object["id"] == id;
    });

    console.log("iconUrl", temp[0].iconUrl);

    return temp[0].iconUrl;
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
}
