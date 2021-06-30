import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CardInfo } from "../models/user/payment-models";
import { EventService } from "../services/event.service";
import { UserService } from "../services/user.service";
import { CardModalComponent } from "../shared/card-modal/card-modal.component";
import { PaymentModalComponent } from "../shared/payment-modal/payment-modal.component";

@Component({
  selector: "app-payments",
  templateUrl: "./payments.page.html",
  styleUrls: ["./payments.page.scss"],
})
export class PaymentsPage implements OnInit {
  payseg: string = "p";
  cardInfo: CardInfo;

  hasCards: boolean = false;

  constructor(
    private userService: UserService,
    private modalController: ModalController,
    private events: EventService
  ) {}

  ngOnInit() {
    this.getCardDetails();

    this.events.subscribe("user:refreshed", (data: any) => {
      console.log("App Component user refresh event", data, "at", data.time);
      this.getCardDetails();
    });
  }

  async getCardDetails() {

    this.hasCards = await this.userService.hasCards();
    
    this.cardInfo = (await this.userService.getCardDetails()) as CardInfo;
    console.log("CardInfo in scheduled payments", this.cardInfo);
  }

  search() {}

  async presentModal() {

    // const card = (await this.userService.getCardDetails()) as CardInfo;
    // console.log("Card Info for Min card", card);

    const modal = await this.modalController.create({
      component: CardModalComponent,
      cssClass: "confirm-modal",
      // componentProps: card,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log(role);

    if (role === "confirm") {
    } else if (role === "add-bank") {
    }
  }
}
