import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { PaymentSchedule } from "src/app/models/user/payment-models";

@Component({
  selector: "app-payment-modal",
  templateUrl: "./payment-modal.component.html",
  styleUrls: ["./payment-modal.component.scss"],
})
export class PaymentModalComponent implements OnInit {
  constructor(public modalControl: ModalController) {}

  @Input() providerName: string;
  @Input() recuring: string;
  @Input() payMethod: string;
  @Input() amount: number;
  @Input() payDate: Date;
  @Input() iconUrl: string;

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }
}
