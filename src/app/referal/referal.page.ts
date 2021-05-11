import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { RafPopoverComponent } from "../shared/raf-popover/raf-popover.component";

@Component({
  selector: "app-referal",
  templateUrl: "./referal.page.html",
  styleUrls: ["./referal.page.scss"],
})
export class ReferalPage implements OnInit {
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: RafPopoverComponent,
      cssClass: "modal-ctr",
    });
    return await modal.present();
  }
}
