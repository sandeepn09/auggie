import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-msg',
  templateUrl: './confirm-msg.component.html',
  styleUrls: ['./confirm-msg.component.scss'],
})
export class ConfirmMsgComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() url: string;
  @Input() buttonText: string;
  @Input() showCancel: boolean;

  constructor(public modalControl: ModalController, private router: Router) {}

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }
}
