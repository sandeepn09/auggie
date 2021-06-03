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
import { MessageService } from "../services/message.service";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: "root",
})
export class PaymentGuard implements CanLoad {
  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) {}

  async canLoad(): Promise<boolean> {
    const hasBanks = await this.userService.hasBanks();
    if (hasBanks && hasBanks === true) {
      let hasCards = await this.userService.hasCards();
      if (hasCards && hasCards === true) {
        return true;
      } else {
        console.log("User has no cards", hasCards);
        const confirm = this.messageService.confirm(
          "Setup",
          "You have no active cards for payment. Do you want to setup the Payment account?",
          "/funding-account",
          "SET UP"
        );
        return false;
      }
    } else {
      console.log("User has no banks", hasBanks);
      const confirm = this.messageService.confirm(
        "Setup",
        "No Funding Accounts have been added. Do you want to setup the Payment account?",
        "/funding-account",
        "SET UP"
      );
      return false;
    }
  }

  async checkCards(url: string) {
    let hasCards = await this.userService.hasCards();
    if (hasCards && hasCards === true) {
      this.router.navigateByUrl(url);
    } else {
      console.log("User has no cards", hasCards);
      this.router.navigateByUrl("/description");
    }
  }

  async checkBanks(url: string) {
    let hasBanks = await this.userService.hasBanks();
    if (hasBanks && hasBanks === true) {
      this.router.navigateByUrl(url);
    } else {
      console.log("User has no banks", hasBanks);
      this.router.navigateByUrl("/description");
    }
  }
}
