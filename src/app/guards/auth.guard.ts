import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";

import { AuthConstants } from "../config/auth-constants";
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private storageService: StorageService, private router: Router) {}

  async canLoad(): Promise<boolean> {
    const authData = await this.storageService.get(AuthConstants.AUTH);
    console.log("Auth Data", authData);

    if (authData) {
      return true;
    } else {
      console.log("No Auth Data");
      this.router.navigateByUrl("/signin", { replaceUrl: true });
      return true;
    }
  }
}
