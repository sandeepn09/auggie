import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private toastController: ToastController) { }

  async showMessage(error: any) {
    const toast = await this.toastController.create({
      message: 'An error occured while processing your request. Details: ' + error.message,
      duration: 3000,
      color: 'danger'
    });
    toast.present();
  }
}
