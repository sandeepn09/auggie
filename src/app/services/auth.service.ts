import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { AppConstants } from "../config/app-constants";
import { AuthConstants } from "../config/auth-constants";
import {
  AuthRequest,
  AuthResponse,
  SignupRequest,
} from "../models/user/user-models";
import { HttpService } from "./http.service";
import { LoadingService } from "./loading.service";
import { MessageService } from "./message.service";
import { StorageService } from "./storage.service";
import { UserService } from "./user.service";

const headers = new HttpHeaders()
  .set("content-type", "application/json")
  .set("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService,
    private loadingService: LoadingService
  ) {}

  login(authRequest: AuthRequest): boolean {
    this.loadingService.presentLoading("Signin in...");
    this.httpService.post("user/auth-token", authRequest, headers).subscribe(
      (res: any) => {
        if (res && res.code == 2504 && res.details) {
          if (res.details.user) {
            this.storageService.store(AuthConstants.AUTH, res.details.user);
          }
          this.loadingService.dismissLoading();
          if (res.details.user && res.details.user.profileComplete === true) {
            this.router.navigateByUrl("/profile-view");
          } else {
            this.router.navigateByUrl("/description");
          }

          console.log("login success!");
        }
        return true;
      },
      (error: any) => {
        this.loadingService.dismissLoading();
        console.log("Error signing in", error.error.message);
        this.messageService.error("Failed", error.error.message, null, "OK");
        return false;
      }
    );

    return false;
  }

  signup(signupRequest: SignupRequest): Observable<any> {
    return this.httpService.post(
      "authenticate",
      signupRequest,
      AppConstants.HEADERS
    );
  }

  logout() {
    this.storageService.clear().then((res) => {
      this.router.navigate(["/signin"]);
    });
  }

  async resetPassword(email: string, password: string) {
    console.log("Resetting password for email", email + " " + password);
    const passwordResetRequest = { username: email, password: password };
    console.log("Requesting password reset", passwordResetRequest);

    const result: any = await this.httpService
      .post("user/password-reset", passwordResetRequest, headers)
      .toPromise()
      .then((data: any) => {
        console.log("Promise Data", data);

        return data;
      })
      .catch((err) => {
        console.log("Password reset failed", err);
        return false;
      });

    console.log("RESULT", result);

    if (result && result.code && result.code === 2600) {
      return true;
    }
    return false;
  }

  async refreshUser() {
    const email = await this.userService.getUserEmail();
    this.httpService.get("user/user-data", { email: email }, headers).subscribe(
      (res: any) => {
        if (res && res.code == 2504 && res.details) {
          if (res.details.user) {
            this.storageService.remove(AuthConstants.AUTH);
            console.log("User Cleared");
            this.storageService.store(AuthConstants.AUTH, res.details.user);
            console.log("User refreshed", res.details.user);
          }
        }
        return true;
      },
      (error: any) => {
        console.log("Error refreshing user", error.error.message);
        this.messageService.error("Failed", error.error.message, null, "OK");
        return false;
      }
    );

    return false;
  }

  async verfifyCode(email: string, code: number) {
    const result: any = await this.httpService
      .get("verification", { email: email, code: code }, headers)
      .toPromise()
      .then((data) => {
        console.log("Promise Data", data);

        return data;
      })
      .catch((err) => {
        console.log("Verification failed", err);
      });

    console.log("RESULT", result);

    if (result.code === 2600) {
      return true;
    }
    return false;
  }

  async sendVerificationCode(email: string) {
    const result: any = await this.httpService
      .get("verification-code", { userId: email }, headers)
      .toPromise()
      .then((data) => {
        console.log("Promise Data", data);

        return data;
      })
      .catch((err) => {
        console.log("Error sending verification code");
      });

    console.log("RESULT", result);

    if (result.code === 2600) {
      return true;
    }
    return false;
  }
}
