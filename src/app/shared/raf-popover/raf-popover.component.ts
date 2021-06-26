import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";

@Component({
  selector: "app-raf-popover",
  templateUrl: "./raf-popover.component.html",
  styleUrls: ["./raf-popover.component.scss"],
})
export class RafPopoverComponent implements OnInit {
  constructor(
    public modalControl: ModalController,
    private alertController: AlertController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  phoneNumber: string = "";

  dismiss() {
    this.modalControl.dismiss();
  }

  async sendText() {
    console.log("phoneNumber: ", this.phoneNumber);

    if (this.phoneNumber.length != 10) {
      const toast = await this.toastController.create({
        message: "Enter a valid 10 digit phone number.",
        duration: 3000,
        color: "danger",
      });
      toast.present();
    } else {
      console.log("Text sent: ", this.phoneNumber);

      const toast = await this.toastController.create({
        message: "Text Message Send success!",
        duration: 2000,
        color: "success",
      });
      toast.present();

      await toast.onDidDismiss();
      this.modalControl.dismiss();
      
    }
  }
}
