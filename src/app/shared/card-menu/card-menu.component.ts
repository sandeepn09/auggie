import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  edit() {
    this.popoverController.dismiss(null, "edit");
  }

  deleteCard() {
    this.popoverController.dismiss(null, "delete");
  }

}
