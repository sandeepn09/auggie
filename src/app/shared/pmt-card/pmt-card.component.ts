import { Component, Input, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { MessageService } from "src/app/services/message.service";
import { CardMenuComponent } from "../card-menu/card-menu.component";
import { SigninHelpComponent } from "../signin-help/signin-help.component";

@Component({
  selector: "app-pmt-card",
  templateUrl: "./pmt-card.component.html",
  styleUrls: ["./pmt-card.component.scss"],
})
export class PmtCardComponent implements OnInit {
  @Input() name: string;
  @Input() cardNumber: string;
  @Input() expiration: Date;
  @Input() balance: string;

  constructor(public popoverController: PopoverController, private messageService: MessageService) {}

  ngOnInit() {}

  currentPopover = null;

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: CardMenuComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

    if(role == "delete") {
      this.confirm();
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
}
