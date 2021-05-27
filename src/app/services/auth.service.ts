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
import { MessageService } from "./message.service";
import { StorageService } from "./storage.service";

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
    private messageService: MessageService
  ) {}

  login(authRequest: AuthRequest): boolean {
    this.httpService.post("user/auth-token", authRequest, headers).subscribe(
      (res: any) => {
        if (res && res.code == 2504 && res.details) {
          if (res.details.user) {
            this.storageService.store(AuthConstants.AUTH, res.details.user);
          }
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

  resetPassword(authRequest: AuthRequest) {
    console.log("Requesting password reset", authRequest);
  }
}
