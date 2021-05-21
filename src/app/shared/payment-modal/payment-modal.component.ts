import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PaymentSchedule } from 'src/app/models/user/payment-models';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
})
export class PaymentModalComponent implements OnInit {

  constructor(public modalControl: ModalController) { }

  @Input() paymentSchedule: PaymentSchedule = {
    logo_url: "",
    providerName: "Netflix Inc.",
    amount: 300.00,
    description: "",
    payMethod: "Card xxxx 1234",
    payDate: new Date(),
    recurring: true
  };

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

}
