import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { ConfirmMsgComponent } from "../shared/confirm-msg/confirm-msg.component";
import { ErrorComponent } from "../shared/error/error.component";
import { MessageComponent } from "../shared/message/message.component";
import { SignupConfirmComponent } from "../shared/signup-confirm/signup-confirm.component";
import { WarnConfirmComponent } from "../shared/warn-confirm/warn-confirm.component";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  async message(
    title: string,
    message: string,
    url: string,
    buttonText: string,
    showCancel: boolean
  ) {
    const modal = await this.modalController.create({
      component: MessageComponent,
      cssClass: "modal-ctr",
      componentProps: {
        title: title,
        message: message,
        url: url,
        buttonText: buttonText,
        showCancel: showCancel,
      },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      if (url && url != null && url != "") {
        this.router.navigateByUrl(url);
      }
      return true;
    }
    return false;
  }

  async confirm(
    title: string,
    message: string,
    url: string,
    buttonText: string,
    showCancel: boolean
  ) {
    const modal = await this.modalController.create({
      component: ConfirmMsgComponent,
      cssClass: "modal-ctr",
      componentProps: {
        title: title,
        message: message,
        url: url,
        buttonText: buttonText,
        showCancel: showCancel,
      },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      if (url && url != null && url != "") {
        this.router.navigateByUrl(url);
      }
      return true;
    }
    return false;
  }

  async error(title: string, message: string, url: string, buttonText: string) {
    const modal = await this.modalController.create({
      component: ErrorComponent,
      cssClass: "modal-ctr",
      componentProps: {
        title: title,
        message: message,
        url: url,
        buttonText: buttonText,
      },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      if (url && url != null && url != "") {
        this.router.navigateByUrl(url);
      }
      return true;
    }
    return false;
  }

  async warn(
    title: string,
    message: string,
    url: string,
    buttonText: string,
    showCancel: boolean
  ) {
    const modal = await this.modalController.create({
      component: WarnConfirmComponent,
      cssClass: "modal-ctr",
      componentProps: {
        title: title,
        message: message,
        url: url,
        buttonText: buttonText,
        showCancel: showCancel,
      },
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log("Role", role);
    if (role === "confirm") {
      if (url && url != null && url != "") {
        this.router.navigateByUrl(url);
      }
      return true;
    }
    return false;
  }
}
