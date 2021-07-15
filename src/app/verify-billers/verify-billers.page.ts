import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { AppConstants } from "../config/app-constants";
import { CardInfo, PaymentSchedule } from "../models/user/payment-models";
import { DataService } from "../services/data.service";
import { PaymentService } from "../services/payment.service";
import { UserService } from "../services/user.service";
import { CardModalComponent } from "../shared/card-modal/card-modal.component";

@Component({
  selector: "app-verify-billers",
  templateUrl: "./verify-billers.page.html",
  styleUrls: ["./verify-billers.page.scss"],
})
export class VerifyBillersPage implements OnInit {
  logoUrl = "";
  cards: CardInfo[];
  colors: string[] = AppConstants.COLORS;
  bills: PaymentSchedule[];

  billers = [
    {
      symbol: "N",
      name: "Netflix Inc.",
      amount: 25,
      date: new Date(),
    },
  ];

  constructor(
    public modalController: ModalController,
    private router: Router,
    private dataService: DataService,
    private userService: UserService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.getCards();
  }

  async getCards() {
    this.cards = (await this.userService.getCards()) as CardInfo[];
    console.log("Cards in Add Payment", this.cards);
    this.bills = await this.paymentService.getScheduledPayments("B");
  }

  async presentModal() {

    // const card = (await this.userService.getCardDetails()) as CardInfo;
    // console.log("Card Info for Min card", card);

    const modal = await this.modalController.create({
      component: CardModalComponent,
      cssClass: "confirm-modal",
      // componentProps: card,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log(role);

    if (role === "confirm") {
    } else if (role === "add-bank") {
    }
  }
}
