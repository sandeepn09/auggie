import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { AppConstants } from "src/app/config/app-constants";
import { ServiceProvider } from "src/app/models/user/payment-models";
import { HttpService } from "src/app/services/http.service";

@Component({
  selector: "app-provider-modal",
  templateUrl: "./provider-modal.component.html",
  styleUrls: ["./provider-modal.component.scss"],
})
export class ProviderModalComponent implements OnInit {
  temp: ServiceProvider = {
    providerName: "Home Rent",
    providerDescription: "Monthly Rent",
    iconUrl: "home",
    providerAddress: "",
    id: 501,
  };

  serviceProviders: ServiceProvider[] = [];

  currentProviderId: number = 501;
  currentProvider: any = this.serviceProviders[0];

  constructor(
    public modalControl: ModalController,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.httpService
      .get("providers", { name: "" }, AppConstants.HEADERS)
      .subscribe((res: any) => {
        console.log("Provider Details", res.details.providers);
        this.serviceProviders.push(...res.details.providers);
        let temp = console.log("Providers", this.serviceProviders);
      });
  }

  dismiss() {
    this.modalControl.dismiss(null, "cancel");
  }

  confirm() {
    this.modalControl.dismiss({ provider: this.currentProvider }, "confirm");
  }

  radioGroupChange(event) {
    this.currentProviderId = event.detail.value;
    console.log("SP ID", this.currentProviderId);

    this.setProvider();
  }

  setProvider() {
    const temp = this.serviceProviders.filter((object) => {
      return object["id"] == this.currentProviderId;
    });

    this.currentProvider = temp[0];

    console.log("Current Provider", this.currentProvider);
  }

  search(event) {
    console.log("in search", event.target.value);
    this.httpService
      .get("providers", { name: event.target.value }, AppConstants.HEADERS)
      .subscribe((res: any) => {
        console.log("Provider Details", res.details.providers);
        this.serviceProviders = res.details.providers;
        let temp = console.log("Providers", this.serviceProviders);
      });
  }
}
