import { Component, OnInit } from "@angular/core";
import { PaymentSchedule } from "../models/user/payment-models";
import { EventService } from "../services/event.service";
import { PaymentService } from "../services/payment.service";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-steps-home",
  templateUrl: "./steps-home.page.html",
  styleUrls: ["./steps-home.page.scss"],
})
export class StepsHomePage implements OnInit {
  isProfileComplete: boolean = false;
  hasBanks: boolean = false;
  hasCards: boolean = false;
  hasPayments: boolean = false;
  isSetupComplete: boolean = false;
  bills: PaymentSchedule[];
  // isProfileComplete: boolean = false;

  constructor(
    private userService: UserService,
    private events: EventService,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.initData();

    this.events.subscribe("user:refreshed", (data: any) => {
      console.log("StepsHomePage user refresh event", data, "at", data.time);

      this.initData();
    });
  }

  async initData() {
    this.hasBanks = await this.userService.hasBanks();
    this.hasCards = await this.userService.hasCards();
    this.isProfileComplete = await this.userService.isProfileComplete();

    this.bills = await this.paymentService.getScheduledPayments("B");

    this.hasPayments = await this.bills && this.bills.length > 0;
    this.isSetupComplete = await this.userService.isSetupComplete();

    console.log(
      "StepsHomePage hasBanks",
      this.hasBanks,
      " hasCards ",
      this.hasCards,
      " isProfileComplete ",
      this.isProfileComplete
    );
  }
}
