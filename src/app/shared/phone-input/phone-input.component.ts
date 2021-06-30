import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-phone-input",
  templateUrl: "./phone-input.component.html",
  styleUrls: ["./phone-input.component.scss"],
})
export class PhoneInputComponent implements OnInit {
  @Input() phoneNumber: string = "";
  @Input() cCode: string = "";

  // @Output()
  // phoneNumberChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
