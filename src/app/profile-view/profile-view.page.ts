import { Component, OnInit } from "@angular/core";
import { User, UserProfile } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BankInfo } from "../models/user/payment-models";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.page.html",
  styleUrls: ["./profile-view.page.scss"],
})
export class ProfileViewPage implements OnInit {
  user: User = {
    userId: 0,
    firstName: "William",
    lastName: "Blake",
    address: "100 Central Street",
    city: "New York",
    state: "NY",
    postalCode: "11282",
    email: "william.blake@gmail.com",
    phone: "+1 (415) 910 4587",
    occupation: "Student",
    gender: "",
    dob: "July 19, 1998",
    income: "$14,753",
    createDateTime: null,
    updateDateTime: null,
  };

  banks: BankInfo[] = [
    {
      accountNumber: 1234,
      routingNumber: 111222333,
      name: "Bank of America",
      accountType: "Checking",
      createDate: new Date(),
      verified: true
    },
    {
      accountNumber: 5555,
      routingNumber: 111222333,
      name: "TD Bank",
      accountType: "Checking",
      createDate: new Date(),
      verified: false
    },
  ];

  userProfile: UserProfile = {
    userDetails: this.user,
    banks: this.banks
  };

  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    postalCode: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    occupation: new FormControl("", Validators.required),
    gender: new FormControl(""),
  });

  constructor() {}

  ngOnInit() {}
}
