import { Component, OnInit } from '@angular/core';
import { DataService, Message } from '../../services/data.service';


@Component({
  selector: 'app-credit-history',
  templateUrl: './credit-history.page.html',
  styleUrls: ['./credit-history.page.scss'],
})
export class CreditHistoryPage implements OnInit {

  constructor(private data: DataService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  ngOnInit() {
  }

}
