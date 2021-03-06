import { User } from "../models/user/user-models";
import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { HttpService } from "./http.service";
import { HttpHeaders } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { AppConstants } from "../config/app-constants";
import { Router } from "@angular/router";
import { CardInfo } from "../models/user/payment-models";
import { AuthService } from "./auth.service";

const headers = new HttpHeaders()
  .set("content-type", "application/json")
  .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(
    private storageService: StorageService,
    private httpService: HttpService,
    private router: Router,
  ) {}

  async updateProfile(profile: any, nextPage: string) {
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
        if (res.code == 2506 || res.code == 2505) {
          
          this.router.navigateByUrl(nextPage);
        }
      },
      (error) => {
        console.log("Error updating profile", error);
      }
    );
  }

  async isProfileComplete() {
    let userData: any = await this.storageService.getUser();
    console.log("userData", userData.profileComplete);
    if (userData && userData.profileComplete === true) {
      return true;
    }

    return false;
  }

  async hasBanks() {
    let userData: any = await this.storageService.getUser();
    console.log("User hasBanks", userData.hasBanks);
    if (userData && userData.hasBanks && userData.hasBanks === true) {
      return true;
    }

    return false;
  }

  async hasCards() {
    let userData: any = await this.storageService.getUser();
    console.log("User hasCards", userData.hasCards);
    if (userData && userData.hasCards && userData.hasCards === true) {
      return true;
    }

    return false;
  }

  async hasPayments() {
    let userData: any = await this.storageService.getUser();
    console.log("User hasCards", userData.hasPayments);
    if (userData && userData.hasPayments && userData.hasPayments === true) {
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

  async getUserId() {
    let userData: any = await this.storageService.getUser();

    console.log("User Id", userData.userId);
    if (userData && userData.userId) {
      return userData.userId;
    }

    return "";
  }

  async getFirstname() {
    let userData: any = await this.storageService.getUser();

    console.log("User Firsname", userData.firstName);
    if (userData && userData.firstName) {
      return userData.firstName;
    }

    return "";
  }

  async getUserDetails() {
    let email = await this.getUserEmail();
    return this.httpService.get(
      "user/user-details",
      { email: email },
      AppConstants.HEADERS
    );
  }

  async getBank() {
    const response: any = await (await this.getUserDetails()).toPromise();

    console.log("Banks for user", response.details);

    if (response && response.details && response.details.banks) {
      return response.details.banks[0];
    }
    return null;
  }

  async getCards() {
    const userId = await this.getUserId();
    console.log("Getting Card Details for User Id", userId);

    const response: any = await this.httpService
      .get("cards", { userId: userId }, AppConstants.HEADERS)
      .toPromise();

    console.log("Cards for user", response);

    if (response && response.details && response.details.cards) {
      return response.details.cards;
    }
    return null;
  }

  async getCardDetails() {
    const cards = await this.getCards();
    if (cards) {
      return cards[0];
    }
    return null;
  }

  async isSetupComplete() {
    const hasBanks = await this.hasBanks();
    const hasCards = await this.hasCards();
    const isProfileComplete = await this.isProfileComplete();

    if (hasBanks == true && hasCards == true && isProfileComplete == true) {
      console.log("Setup Complete : true");
      return true;
    } else {
      console.log("Setup Complete : false");
      return false;
    }
  }
}
