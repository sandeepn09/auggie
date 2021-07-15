import { Component, OnInit } from "@angular/core";
import { AppConstants } from "../config/app-constants";
import { PaymentSchedule } from "../models/user/payment-models";
import { PaymentService } from "../services/payment.service";

@Component({
  selector: "app-add-bills",
  templateUrl: "./add-bills.page.html",
  styleUrls: ["./add-bills.page.scss"],
})
export class AddBillsPage implements OnInit {
  colors: string[] = AppConstants.COLORS;

  bills: PaymentSchedule[];
  sortBy: string = "B";
  totalPaid: number = 0;
  constructor(private paymentService: PaymentService) {}

  async ngOnInit() {
    this.bills = await this.paymentService.getScheduledPayments(this.sortBy);
    console.log("Scheduled payments from server", this.bills);
  }

  setSelected(event: any) {
    console.log("Bill selected", event.target.value);
  }
}
