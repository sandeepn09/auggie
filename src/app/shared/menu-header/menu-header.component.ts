import { Component, Input, NgZone, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConstants } from "src/app/config/auth-constants";
import { StorageService } from "src/app/services/storage.service";

@Component({
  selector: "app-menu-header",
  templateUrl: "./menu-header.component.html",
  styleUrls: ["./menu-header.component.scss"],
})
export class MenuHeaderComponent implements OnInit {
  @Input("name") name: string;
  darkMode: boolean = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkMode = prefersDark.matches;

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => {
      this.toggleDarkTheme(mediaQuery.matches);
    });

    console.log("prefersDark", this.darkMode);

    let value: any = await this.storageService.get(AuthConstants.AUTH);
    console.log("name", value.firstName);
    this.name = value.firstName;
  }

  // Add or remove the "dark" class based on if the media query matches
  toggleDarkTheme(shouldAdd) {
    // document.body.classList.toggle("dark", shouldAdd);
    console.log("Toggling dark mode", shouldAdd, this.router.url);
    this.darkMode = shouldAdd;
    this.zone.run(() => {
      this.router.navigate([this.router.url]);
    });
  }
}
