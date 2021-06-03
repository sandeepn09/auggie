import { Component, Input, OnInit } from "@angular/core";
import { ModalController, PopoverController } from "@ionic/angular";
import { MessageService } from "src/app/services/message.service";
import { CardMenuComponent } from "../card-menu/card-menu.component";
import { EditCardComponent } from "../edit-card/edit-card.component";
import { SigninHelpComponent } from "../signin-help/signin-help.component";

@Component({
  selector: "app-pmt-card",
  templateUrl: "./pmt-card.component.html",
  styleUrls: ["./pmt-card.component.scss"],
})
export class PmtCardComponent implements OnInit {
  @Input() name: string;
  @Input("cardNumber") cardNumber: number;
  @Input("expirationDate") expirationDate: Date;
  @Input("balance") balance: string;
  @Input("id") id: number;

  constructor(
    public popoverController: PopoverController,
    private messageService: MessageService,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  currentPopover = null;

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CardMenuComponent,
      cssClass: "popover-menu",
      event: ev,
      translucent: true,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);

    if (role == "delete") {
      this.confirm();
    }

    if (role == "edit") {
      this.presentCardModal();
    }
  }

  async confirm() {
    const confirm = await this.messageService.warn(
      "Warning",
      "Deleting the Card will cancel all payments. Are you sure you want to delete?",
      null,
      "DELETE",
      true
    );
    console.log("Remove Card confirmed", confirm);
  }

  async presentCardModal() {
    // console.log("BANK INFO", this.user);
    const modal = await this.modalController.create({
      component: EditCardComponent,
      // cssClass: "full-modal",
      // componentProps: this.user,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Selected Provider", info);

    if (info.provider) {
      // this.dataService.setProvider(info.provider);
      // this.router.navigate(["/schedule-payment"]);
    }
  }
}
