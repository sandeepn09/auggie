import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "./services/auth.service";
import { UserService } from "./services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  hasBanks: boolean = false;
  hasCards: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.initializeApp();
    this.initData();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async initData() {
    this.hasBanks = await this.userService.hasBanks();
    this.hasCards = await this.userService.hasCards();
  }

  logout() {
    this.authService.logout();
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
