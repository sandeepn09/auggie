import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup-confirm',
  templateUrl: './signup-confirm.component.html',
  styleUrls: ['./signup-confirm.component.scss'],
})
export class SignupConfirmComponent implements OnInit {

  constructor(public modalControl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "confirm");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

}
