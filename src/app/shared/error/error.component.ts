import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
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
