import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../../services/data.service';
import {PaymentService, Record} from '../../services/payment.service';


@Component({
  selector: 'app-credit-history',
  templateUrl: './credit-history.page.html',
  styleUrls: ['./credit-history.page.scss'],
})
export class CreditHistoryPage implements OnInit {

  constructor(private data: PaymentService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getRecords(): Record[] {
    return this.data.getRecords();
  }

  ngOnInit() {
  }

}
