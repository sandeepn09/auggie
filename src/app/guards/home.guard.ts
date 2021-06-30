import { Injectable } from "@angular/core";
import { Router, CanLoad, CanActivate } from "@angular/router";
import { AuthConstants } from "../config/auth-constants";
import { StorageService } from "../services/storage.service";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class HomeGuard implements CanLoad {
  constructor(
    private storageService: StorageService,
    private router: Router,
    private userService: UserService
  ) {}

  async canLoad(): Promise<boolean> {
    const authData = await this.storageService.get(AuthConstants.AUTH);
    console.log("Auth Data", authData);
    const isProfileComplete = this.userService.isProfileComplete();

    if (!authData) {
      console.log("No Auth Data");
      return true;
    } else {
      this.router.navigateByUrl("/payments", { replaceUrl: true });
      return true;
    }
  }
}
