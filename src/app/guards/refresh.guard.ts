import { Injectable } from "@angular/core";
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class RefreshGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  async canLoad(): Promise<boolean> {
    await this.authService.refreshUser();

    return true;
  }
}
