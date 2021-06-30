import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  UrlSegment,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class ProfileGuard implements CanLoad {
  constructor(private router: Router, private userService: UserService) {}

  async canLoad(): Promise<boolean> {
    const isProfileComplete = await this.userService.isProfileComplete();
    console.log("User Profile Complete", isProfileComplete);

    if (isProfileComplete) {
      return true;
    } else {
      this.router.navigateByUrl("/description", { replaceUrl: true });
      return true;
    }
  }
}
