import { Component, OnInit } from "@angular/core";
import { AppConstants } from "../config/app-constants";
import { PaymentSchedule } from "../models/user/payment-models";
import { PaymentService } from "../services/payment.service";

@Component({
  selector: "app-bill-history",
  templateUrl: "./bill-history.page.html",
  styleUrls: ["./bill-history.page.scss"],
})
export class BillHistoryPage implements OnInit {
  colors: string[] = AppConstants.COLORS;

  bills: PaymentSchedule[];
  sortBy: string = "B";
  totalPaid:number = 0;

  constructor(private paymentService: PaymentService) {}

  async ngOnInit() {
    this.bills = await this.paymentService.getScheduledPayments(this.sortBy);
    console.log("Scheduled payments from server", this.bills);
    this.totalPaid = 0;

    this.bills.forEach(obj => {
      this.totalPaid = this.totalPaid + obj.amount;
    })
  }

  async sort(sortParam: string) {
    this.sortBy = sortParam;
    await this.ngOnInit();
  }
}
