import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class BillGuard implements CanLoad {
  constructor(private userService: UserService, private router: Router, private authService: AuthService) {}

  async canLoad(): Promise<boolean> {
    await this.authService.refreshUser();
    const isSetupComplete = await this.userService.isSetupComplete();

    if (isSetupComplete) {
      console.log("Setup complete !!");
      return true;
    } else {
      console.log("Setup incomplete");
      this.router.navigateByUrl("/steps-home", { replaceUrl: true });
      return true;
    }
  }
}
