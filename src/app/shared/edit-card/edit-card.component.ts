import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AppConstants } from "src/app/config/app-constants";
import { BankInfo, CardInfo } from "src/app/models/user/payment-models";
import { HttpService } from "src/app/services/http.service";
import { MessageService } from "src/app/services/message.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-edit-card",
  templateUrl: "./edit-card.component.html",
  styleUrls: ["./edit-card.component.scss"],
})
export class EditCardComponent implements OnInit {
  banks: BankInfo[];
  cardInfo: CardInfo;

  constructor(
    private httpService: HttpService,
    private userService: UserService,
    public modalController: ModalController,
    private messageService: MessageService
  ) {
    
  }

  ngOnInit() {
    this.getCardDetails();
    this.getBanks();
  }

  async getCardDetails() {
    this.cardInfo = await this.userService.getCardDetails() as CardInfo;
    console.log("CARDINfo!!!!!!!", this.cardInfo);
  }

  async getBanks() {
    const email = await this.userService.getUserEmail();
    console.log("Email!!!", email);

    this.httpService
      .get("user/user-details", { email: email }, AppConstants.HEADERS)
      .subscribe((res: any) => {
        console.log("User Details in Card component", res.details.userDetails);
        console.log("User Details in Card component", res.details.banks);
        this.banks = res.details.banks;
      });
  }

  async save() {
    const confirmed = await this.messageService.confirm(
      "Confirm",
      "Please confirm you want to update the funding account for the card. Ensure the Funding Account has sufficient funds",
      null,
      "UPDATE"
    );

    console.log("Funding Account update confirmed", confirmed);
  }
}
