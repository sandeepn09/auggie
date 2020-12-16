import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user/user-models";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  step = 1;
  user: User = {
    userId: 0,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    phone: '',
    occupation: '',
    gender: '',
    createDateTime: null,
    updateDateTime: null,
  };

  constructor() {}

  next() {
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }

  ngOnInit() {}
}
