import { Injectable } from "@angular/core";
import { Router, CanLoad, CanActivate } from "@angular/router";
import { AuthConstants } from "../config/auth-constants";
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: "root",
})
export class HomeGuard implements CanLoad {
  constructor(private storageService: StorageService, private router: Router) {}

  async canLoad(): Promise<boolean> {
    const authData = await this.storageService.get(AuthConstants.AUTH);
    console.log("Auth Data", authData);

    if (!authData) {
      console.log("No Auth Data");
      return true;
    } else {
      this.router.navigateByUrl("/profile-view", { replaceUrl: true });
      return true;
    }
  }
}
