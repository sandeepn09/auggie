import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-pmt-card",
  templateUrl: "./pmt-card.component.html",
  styleUrls: ["./pmt-card.component.scss"],
})
export class PmtCardComponent implements OnInit {
  @Input() name: string;
  @Input() cardNumber: string;
  @Input() expiration: Date;
  @Input() balance: string;

  constructor() {}

  ngOnInit() {}
}
