import { Component, OnInit } from "@angular/core";
import { AuthConstants } from "../config/auth-constants";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.page.html",
  styleUrls: ["./description.page.scss"],
})
export class DescriptionPage implements OnInit {
  constructor(private storageService: StorageService) {}

  ngOnInit() {}
}
