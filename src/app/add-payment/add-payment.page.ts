import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { DataService } from "../services/data.service";
import { LogoService } from "../services/logo.service";
import { ProviderModalComponent } from "../shared/provider-modal/provider-modal.component";
import { RafPopoverComponent } from "../shared/raf-popover/raf-popover.component";
import { SendTextModalComponent } from "../shared/send-text-modal/send-text-modal.component";

@Component({
  selector: "app-add-payment",
  templateUrl: "./add-payment.page.html",
  styleUrls: ["./add-payment.page.scss"],
})
export class AddPaymentPage implements OnInit {
  logoUrl = "";
  constructor(
    public modalController: ModalController,
    private logoService: LogoService,
    private router: Router,
    private dataService: DataService
  ) {}

  public cards = [
    {
      name: "Sandeep Nadagouda",
      cardNumber: 1234,
      expiration: new Date(),
      balance: 5000,
    },
  ];

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: RafPopoverComponent,
      // component: SendTextModalComponent,
      cssClass: "modal-ctr",
    });
    return await modal.present();
  }

  async presentPaymentModal() {
    // console.log("BANK INFO", this.user);
    const modal = await this.modalController.create({
      component: ProviderModalComponent,
      cssClass: "full-modal",
      // componentProps: this.user,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Selected Provider", info);

    if (info.provider) {
      this.dataService.setProvider(info.provider);
      this.router.navigate(["/schedule-payment"]);
    }
  }
}
