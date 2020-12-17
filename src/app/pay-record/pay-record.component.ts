import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../services/data.service";
import { Record } from "../services/payment.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-pay-record",
  templateUrl: "./pay-record.component.html",
  styleUrls: ["./pay-record.component.scss"],
})
export class PayRecordComponent implements OnInit {
  @Input() record: Record;

  constructor() {}

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === "ios";
  }
}
