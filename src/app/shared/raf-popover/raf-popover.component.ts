import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-raf-popover',
  templateUrl: './raf-popover.component.html',
  styleUrls: ['./raf-popover.component.scss'],
})
export class RafPopoverComponent implements OnInit {

  constructor(public modalControl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss();
  }

}
