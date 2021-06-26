import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { BankInfo } from "src/app/models/user/payment-models";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-bank-modal",
  templateUrl: "./bank-modal.component.html",
  styleUrls: ["./bank-modal.component.scss"],
})
export class BankModalComponent implements OnInit {
  hasCards: boolean = false;

  constructor(
    public modalControl: ModalController,
    private userService: UserService
  ) {}

  @Input() bankName: string;
  @Input() accountNumber: number;
  @Input() routingNumber: number;
  @Input() accountType: string;
  @Input() acctType: string;

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.hasCards = await this.userService.hasCards();

  }

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

  confirmAddCard() {
    this.modalControl.dismiss(null, "add-card");
  }
}
