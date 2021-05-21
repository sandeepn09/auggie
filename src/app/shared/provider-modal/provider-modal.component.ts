import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceProvider } from 'src/app/models/user/payment-models';

@Component({
  selector: 'app-provider-modal',
  templateUrl: './provider-modal.component.html',
  styleUrls: ['./provider-modal.component.scss'],
})
export class ProviderModalComponent implements OnInit {

  serviceProviders: ServiceProvider[] = [{
    name: "Home Rent",
    description: "Monthly Rent",
    logoUrl: "https://assets.brandfetch.io/41d05924a6fd481.png",
    address: "",
    icon: "home",
    provider: false,
    id: 1
  },
  {
    name: "Netflix",
    description: "Netflix Inc.",
    logoUrl: "https://assets.brandfetch.io/41d05924a6fd481.png",
    address: "",
    icon: "",
    provider: true,
    id: 2
  },
  {
    name: "Amazon",
    description: "Amazon Inc",
    logoUrl: "https://assets.brandfetch.io/097a35e020354b4.png",
    address: "",
    icon: "",
    provider: true,
    id: 3
  },
  {
    name: "Hulu",
    description: "Hulu Inc.",
    logoUrl: "https://assets.brandfetch.io/e7a1ac57ae64452.png",
    address: "",
    icon: "",
    provider: true,
    id: 4
  }];

  constructor(public modalControl: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }

}
