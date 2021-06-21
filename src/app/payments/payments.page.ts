import { Component, OnInit } from '@angular/core';
import { CardInfo } from '../models/user/payment-models';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {

  payseg: string = "p";
  cardInfo: CardInfo;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getCardDetails();
  }

  async getCardDetails() {
    this.cardInfo = await this.userService.getCardDetails() as CardInfo;
    console.log("CardInfo in scheduled payments", this.cardInfo);
  }

  search() {
    
  }
}
