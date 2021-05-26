import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ErrorComponent } from "../shared/error/error.component";
import { MessageComponent } from "../shared/message/message.component";
import { SignupConfirmComponent } from "../shared/signup-confirm/signup-confirm.component";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  async message(title: string, message: string, url: string) {
    const modal = await this.modalController.create({
      component: MessageComponent,
      cssClass: "modal-ctr",
      componentProps: { title: title, message: message, url: url },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      this.router.navigateByUrl(url);
    }
  }

  async error(title: string, message: string, url: string) {
    const modal = await this.modalController.create({
      component: ErrorComponent,
      cssClass: "modal-ctr",
      componentProps: { title: title, message: message, url: url },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      this.router.navigateByUrl("/signin");
    }
  }
}
