import { Injectable } from "@angular/core";
import { AppConstants } from "../config/app-constants";
import { ErrorHandlerService } from "./error-handler.service";
import { HttpService } from "./http.service";

@Injectable({
  providedIn: "root",
})
export class ProviderService {
  constructor(
    private httpService: HttpService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  async getAllProviders() {
    const response: any = await this.httpService
      .get("providers", { name: "" }, AppConstants.HEADERS)
      .toPromise()
      .catch((error) => {
        this.errorHandlerService.showMessage(error);
      });

    console.log("Providers With Promise", response);
    return response.details.providers;
  }
}
