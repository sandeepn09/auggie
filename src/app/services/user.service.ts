import { User } from "../models/user/user-models";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { HttpService } from "./http.service";
import { HttpHeaders } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AppConstants } from "../config/app-constants";
import { Router } from "@angular/router";

const headers = new HttpHeaders()
  .set("content-type", "application/json")
  .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class UserService {
  user: User = {
    userId: 0,
    firstName: "John",
    lastName: "Doe",
    address: "100 Central Street",
    city: "NewYork",
    state: "NY",
    postalCode: "",
    email: "pmharkins@gmail.com",
    phone: "212-345-0000",
    occupation: "",
    gender: "",
    dob: "",
    annualIncome: "",
    createDateTime: null,
    updateDateTime: null,
  };

  constructor(
    private storageService: StorageService,
    private httpService: HttpService,
    private router: Router
  ) {}

  public getUser(): User {
    return this.user;
  }

  async updateProfile(profile: any) {
    let userData: any = await this.storageService.getUser();
    console.log("userData", userData);
    let userIdObj: any = { userId: userData.userId };
    let fullProfile = { ...profile, ...userIdObj };

    var datePipe = new DatePipe("en-US");
    let formattedDob = datePipe.transform(
      new Date(fullProfile.dob),
      "MM-dd-yyyy"
    );
    fullProfile.dob = formattedDob;

    console.log("Full Profile", fullProfile);

    this.httpService.post("user/user-profile", fullProfile, headers).subscribe(
      (res: any) => {
        console.log("Prof res", res);
        if (res.code == 2506) {
          this.router.navigateByUrl("profile-view");
        }
      },
      (error) => {
        console.log("Error updating profile", error);
      }
    );
  }

  async isProfileComplete() {
    let userData: any = await this.storageService.getUser();
    // this.storageService.getUser().su

    console.log("userData", userData.profileComplete);
    if (userData && userData.profileComplete === true) {
      return true;
    }

    return false;
  }

  async getUserEmail() {
    let userData: any = await this.storageService.getUser();

    console.log("User Email", userData.email);
    if (userData && userData.email) {
      return userData.email;
    }

    return "";
  }

  async getUserDetails() {
    let email = await this.getUserEmail();
    return this.httpService.get(
      "user/user-details",
      { email: "sandeepn09@gmail.com" },
      AppConstants.HEADERS
    );
  }
}
