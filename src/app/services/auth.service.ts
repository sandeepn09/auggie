import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthConstants } from "../config/auth-constants";
import {
  AuthRequest,
  AuthResponse,
  SignupRequest,
} from "../models/user/user-models";
import { HttpService } from "./http.service";
import { StorageService } from "./storage.service";

const headers = new HttpHeaders();

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) {}

  login(authRequest: AuthRequest): boolean {
    this.httpService.post("authenticate", authRequest, headers).subscribe(
      (res: any) => {
        if (res && res.details) {
          this.storageService.store(AuthConstants.AUTH, res.details);
          if (res.details.profileComplete === true) {
            this.router.navigateByUrl("/profile-view");
          } else {
            this.router.navigateByUrl("/description");
          }

          console.log("login success!");
        }
        return true;
      },
      (errror: any) => {
        console.log("Error signing in");
        return false;
      }
    );

    return false;
  }

  signup(signupRequest: SignupRequest): Observable<any> {
    return this.httpService.post("authenticate", signupRequest, headers);
  }

  logout() {
    this.storageService.clear().then((res) => {
      this.router.navigate(["/signin"]);
    });
  }
}
