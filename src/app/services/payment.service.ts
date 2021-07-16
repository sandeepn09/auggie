import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppConstants } from "../config/app-constants";
import { PaymentSchedule } from "../models/user/payment-models";
import { AuthService } from "./auth.service";
import { ErrorHandlerService } from "./error-handler.service";
import { HttpService } from "./http.service";
import { MessageService } from "./message.service";
import { StorageService } from "./storage.service";
import { UserService } from "./user.service";

export interface Record {
  amount: number;
  payee: string;
  date: Date;
  paymethod: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  public records: Record[] = [
    {
      amount: 48.02,
      payee: "Netflix Inc.",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
    {
      amount: 600.05,
      payee: "Rent",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
    {
      amount: 63.02,
      payee: "Eversource Utilities.",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
    {
      amount: 80.15,
      payee: "Verizon",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
    {
      amount: 55.02,
      payee: "Xfinity.",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
    {
      amount: 48.02,
      payee: "HULU",
      date: new Date(),
      paymethod: "xxxx-xxxx-xxxx-1234",
      id: 0,
      read: false,
    },
  ];

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService,
    private errorHandlerService: ErrorHandlerService,
    private authService: AuthService
  ) {}

  public getRecords(): Record[] {
    return this.records;
  }

  public getRecordsById(id: number): Record {
    return this.records[id];
  }

  async addFundingAccount(bankInfo: any, nextPage: string) {
    let userData: any = await this.storageService.getUser();
    console.log("bankInfo", bankInfo);

    let userIdObj: any = { userId: userData.userId };
    let desc = { description: bankInfo.bankName };
    let fullBankInfo = {
      ...bankInfo,
      ...userIdObj,
      ...desc,
    };

    console.log("fullBankInfo", fullBankInfo);
    this.httpService
      .post("payment-method", fullBankInfo, AppConstants.HEADERS)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.messageService.message(
            "Success!",
            "Your funding account was added and can be used to fund cards now!",
            nextPage,
            "OK",
            false
          );

          // this.router.navigateByUrl('/profile-view');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  async schedulePayment(paymentSchedule: PaymentSchedule, nextPage: string) {
    delete paymentSchedule["providerName"];

    const userId = await this.userService.getUserId();
    let data = { ...paymentSchedule, ...{ userId: userId, active: true } };
    console.log("Updated PaymentSchedule in service", data);

    this.httpService.post("payment", data, AppConstants.HEADERS).subscribe(
      (res: any) => {
        console.log("Post Payment response", res);
        if (res && res.code == 2600) {
          this.messageService.message(
            "Success!",
            "Payment was scheduled",
            nextPage,
            "OK",
            false
          );
        }
      },
      (error) => {
        this.errorHandlerService.showMessage(error);
      }
    );
  }

  async postPayment(payments: any, nextPage: string) {
    const userId = await this.userService.getUserId();
    let data = { bankPaymentRequests: payments };
    console.log("Updated PaymentSchedule in service", data);

    this.httpService.post("/v2/payment", data, AppConstants.HEADERS).subscribe(
      (res: any) => {
        console.log("Post Payment response", res);
        if (res && res.code == 2600) {
          this.authService.refreshUser();

          setTimeout(() => {
            this.messageService.message(
              "Success!",
              "Bill add success!",
              nextPage,
              "OK",
              false
            );
          }, 1000);
        }
      },
      (error) => {
        this.errorHandlerService.showMessage(error);
      }
    );
  }

  async getScheduledPayments(sortBy) {
    const userId = await this.userService.getUserId();
    const response: any = await this.httpService
      .get(
        "scheduled-payments",
        { userId: userId, sortBy: sortBy },
        AppConstants.HEADERS
      )
      .toPromise()
      .catch((error) => {
        this.errorHandlerService.showMessage(error);
      });

    console.log("Payments With Promise", response);
    return response.details.payments;
  }

  async getBankPayments() {
    const userId = await this.userService.getUserId();
    const response: any = await this.httpService
      .get("bank-payments", { userId: userId }, AppConstants.HEADERS)
      .toPromise()
      .catch((error) => {
        this.errorHandlerService.showMessage(error);
      });

    console.log("Bank payments", response);
    return response.details.payments;
  }

  async createCard() {
    const userId = await this.userService.getUserId();
    const response: any = await this.httpService
      .get("card-request", { userId: userId }, AppConstants.HEADERS)
      .toPromise()
      .catch((error) => {
        this.errorHandlerService.showMessage(error);
      });

    console.log("Card Creation Response", response);
    if (
      response &&
      (response.code == 2508 || response.code == 2509 || response.code == 2510)
    ) {
      return true;
    }
    return false;
  }

  async createCard1() {
    setTimeout(() => {
      console.log("Creating card!!!");
    }, 4000);
  }
}
