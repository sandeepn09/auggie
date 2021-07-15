import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AppConstants } from "../config/app-constants";
import { PaymentSchedule } from "../models/user/payment-models";
import { PaymentService } from "../services/payment.service";

@Component({
  selector: "app-billers",
  templateUrl: "./billers.page.html",
  styleUrls: ["./billers.page.scss"],
})
export class BillersPage implements OnInit {
  colors: string[] = AppConstants.COLORS;
  bills: PaymentSchedule[];

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.bills = await this.paymentService.getScheduledPayments("B");
  }

  async save() {
    this.bills.forEach((obj: any) => {
      obj.paymentDate =
        new DatePipe("en-US").transform(
          obj.paymentDate,
          "yyyy-MM-ddTHH:mm:ss"
        ) + ".000Z";
      delete obj.createdAt;
      delete obj.updatedAt;
      obj.paymentAmount = obj.amount;
    });

    console.log("Updated Bill Verifications", this.bills);
    this.paymentService.postPayment(this.bills, "/bill-history");
    
  }
}
