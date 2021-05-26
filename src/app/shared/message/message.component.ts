import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-message",
  templateUrl: "./message.component.html",
  styleUrls: ["./message.component.scss"],
})
export class MessageComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() url: string;

  constructor(public modalControl: ModalController, private router: Router) {}

  ngOnInit() {}

  dismiss() {
    this.modalControl.dismiss(null, "confirm");
  }

  confirm() {
    this.modalControl.dismiss(null, "confirm");
  }
}
