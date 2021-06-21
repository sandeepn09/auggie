import { Component, OnInit } from "@angular/core";
import { User, UserProfile } from "../models/user/user-models";
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BankInfo } from "../models/user/payment-models";
import { HttpService } from "../services/http.service";
import { AppConstants } from "../config/app-constants";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";
import { MessageService } from "../services/message.service";

@Component({
  selector: "app-profile-view",
  templateUrl: "./profile-view.page.html",
  styleUrls: ["./profile-view.page.scss"],
})
export class ProfileViewPage implements OnInit {
  user: User;

  formattedIncome: string;
  profileComplete: boolean;

  banks: BankInfo[];
  darkMode: boolean = false;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
   this.initData();
  }

  async initData() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
    console.log("prefersDark", this.darkMode);

    const email = await this.userService.getUserEmail();
    this.httpService
    .get(
      "user/user-details",
      { email: email },
      AppConstants.HEADERS
    )
    .subscribe((res: any) => {
      console.log("User Details", res.details.userDetails);
      console.log("User Details", res.details.banks);
      this.banks = res.details.banks;
      this.user = res.details.userDetails;
      this.formattedIncome = this.user.annualIncome.toString();
    });

  this.checkProfile();
  }

  async checkProfile() {
    this.profileComplete = await this.userService.isProfileComplete();
    console.log("Profile Completeeee", this.profileComplete);
  }

  logout() {
    this.authService.logout();
  }

  async deleteAccount() {
    console.log("Account delete requested");
    const confirm = await this.messageService.warn(
      "Warning",
      "Deleting the account will deactivate your cards and cancel all payments. Are you sure you want to delete?",
      null,
      "DELETE",
      true
    );
    console.log("Delet user account confirmed", confirm);
  }

  async deleteBank(bankId) {
    console.log("Remove funding account requested", bankId);
    const confirm = await this.messageService.warn(
      "Warning",
      "Deleting the Funding Account will cancel all payments. Are you sure you want to delete?",
      null,
      "REMOVE",
      true
    );
    console.log("Remove funding account confirmed", confirm);
  }

  getAcctType(key: string) {
    return AppConstants.ACCT_TYPE.get(key);
  }

  async testModal() {
    const result = await this.messageService.confirm(
      "Confirm",
      "Success",
      null,
      "OK"
    );
    console.log("Action Result", result);
  }
}
