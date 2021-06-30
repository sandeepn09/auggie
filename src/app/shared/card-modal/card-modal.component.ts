import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {}

}
