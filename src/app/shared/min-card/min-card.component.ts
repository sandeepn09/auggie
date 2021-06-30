import { Component, Input, OnInit } from "@angular/core";
import { CardInfo } from "src/app/models/user/payment-models";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-min-card",
  templateUrl: "./min-card.component.html",
  styleUrls: ["./min-card.component.scss"],
})
export class MinCardComponent implements OnInit {
  @Input("cardNumber") cardNumber: string;
  @Input("expirationDate") expirationDate: Date;
  @Input("cardId") cardId: number;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    const card = (await this.userService.getCardDetails()) as CardInfo;
    // this.cardNumber = card.cardNumber;
    this.expirationDate = card.expirationDate;
    this.cardId = card.id;
    console.log("Card Info for Min card", card);

    let cn = card.cardNumber.toString();
    let temp =
      cn.substring(0, 4) +
      " " +
      cn.substring(4, 8) +
      " " +
      cn.substring(8, 12) +
      " " +
      cn.substring(12, 16);

      this.cardNumber = temp;
  }
}
