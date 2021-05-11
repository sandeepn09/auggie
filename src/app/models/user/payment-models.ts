import { NumberFormatStyle } from "@angular/common";

export class BankInfo {
  name: string;
  accountNumber: number;
  routingNumber: number;
  accountType: string;
  createDate: Date;
}

export class PaymentSchedule {
  providerName: string;
  description: string;
  amount: number;
  payMethod: string;
  recurring: boolean;
  payDate: Date;
}

export class LogoResponse {
  statusCode: number;
  response: { logo: {}; icon: {} };
}
