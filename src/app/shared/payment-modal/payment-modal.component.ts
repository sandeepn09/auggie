import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PaymentSchedule } from "src/app/models/user/payment-models";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.scss"],
})
export class PaymentModalComponent implements OnInit {
  hasBanks: boolean = false;

  constructor(
    public modalControl: ModalController,
    private userService: UserService
  ) {}

  @Input() providerName: string;
  @Input() recurring: string;
  @Input() cardNumber: number;
  @Input() amount: number;
  @Input() paymentDate: Date;
  @Input() iconUrl: string;

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.hasBanks = await this.userService.hasBanks();
  }

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

  confirmAddBank() {
    this.modalControl.dismiss(null, "add-bank");
  }
}
