import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LogoService } from '../services/logo.service';
import { ProviderModalComponent } from '../shared/provider-modal/provider-modal.component';
import { RafPopoverComponent } from '../shared/raf-popover/raf-popover.component';
import { SendTextModalComponent } from '../shared/send-text-modal/send-text-modal.component';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.page.html',
  styleUrls: ['./add-payment.page.scss'],
})
export class AddPaymentPage implements OnInit {

  logoUrl = "";
  constructor(public modalController: ModalController, private logoService: LogoService) { }

  ngOnInit() {
    console.log("On Payment init");
    this.logoService.getInfo("www.hulu.com").subscribe(data => {
      this.logoUrl = data.response.icon.image;
      console.log("logoUrl", this.logoUrl);
    });
    
  }

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
    console.log(role);
  }

}
