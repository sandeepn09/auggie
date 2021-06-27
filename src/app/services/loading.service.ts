import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class LoadingService {
  constructor(private loadingController: LoadingController) {}

  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: message,
      duration: 2000,
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log("Loading dismissed!");
  }

  async dismissLoading() {
    
    await this.loadingController.dismiss();
  }
}
