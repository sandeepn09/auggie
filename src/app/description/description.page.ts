import { Component, OnInit } from "@angular/core";
import { AuthConstants } from "../config/auth-constants";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.page.html",
  styleUrls: ["./description.page.scss"],
})
export class DescriptionPage implements OnInit {
  firstName: string;
  darkMode: boolean = false;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    this.darkMode = prefersDark.matches;
    console.log("prefersDark", this.darkMode);

    let value: any = await this.storageService.get(AuthConstants.AUTH);
    console.log("name", value.firstName);
    this.firstName = value.firstName;
  }
}
