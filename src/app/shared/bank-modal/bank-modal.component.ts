import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BankInfo } from 'src/app/models/user/payment-models';

@Component({
  selector: 'app-bank-modal',
  templateUrl: './bank-modal.component.html',
  styleUrls: ['./bank-modal.component.scss'],
})
export class BankModalComponent implements OnInit {

  constructor(public modalControl: ModalController) { }

  @Input() bankName: string;
  @Input() accountNumber: number;
  @Input() routingNumber: number;
  @Input() accountType: string;
  @Input() acctType: string;


  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

}
