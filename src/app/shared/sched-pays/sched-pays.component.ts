import { Component, OnInit } from "@angular/core";
import { CardInfo, PaymentSchedule, ServiceProvider } from "src/app/models/user/payment-models";
import { PaymentService } from "src/app/services/payment.service";
import { ProviderService } from "src/app/services/provider.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-sched-pays",
  templateUrl: "./sched-pays.component.html",
  styleUrls: ["./sched-pays.component.scss"],
})
export class SchedPaysComponent implements OnInit {
  cardInfo: CardInfo;
  paymentSchedules: PaymentSchedule[];
  providers: ServiceProvider[];

  constructor(
    private paymentService: PaymentService,
    private providerService: ProviderService
  ) {}

  ngOnInit() {
    this.initData();
  }

  async initData() {
    this.paymentSchedules =
      (await this.paymentService.getScheduledPayments()) as PaymentSchedule[];
    console.log("SchedPaysComponent paymentSchedules", this.paymentSchedules);

    this.providers = await this.providerService.getAllProviders() as ServiceProvider[];
    console.log("SchedPaysComponent", this.providers);
  }

  getProviderName(id: number) {
    const temp = this.providers.filter((object) => {
      return object["id"] == id;
    });

    console.log("ProviderName", temp[0].providerName);

    return temp[0].providerName;
  }
}
