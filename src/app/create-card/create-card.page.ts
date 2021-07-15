import { Component, OnInit } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { LoadingService } from "../services/loading.service";
import { MessageService } from "../services/message.service";
import { PaymentService } from "../services/payment.service";

@Component({
  selector: "app-create-card",
  templateUrl: "./create-card.page.html",
  styleUrls: ["./create-card.page.scss"],
})
export class CreateCardPage implements OnInit {
  constructor(
    private messageService: MessageService,
    public loadingService: LoadingService,
    private paymentService: PaymentService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  async createCard() {
    await this.loadingService.presentLoading("Creating card...");

    let result = await this.paymentService.createCard();

    await this.loadingService.dismissLoading();
    await this.authService.refreshUser();
    this.messageService.message(
      "Success!",
      "Your Augie card was approved and created! Make sure you enter the Augie card number on the Service provider's site for all the payments that you have or will set up",
      "/verify-billers",
      "OK",
      false
    );

    
  }
}
