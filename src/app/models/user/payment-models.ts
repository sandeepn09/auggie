import { NumberFormatStyle } from "@angular/common";

export class BankInfo {
  bankName: string;
  accountNumber: number;
  routingNumber: number;
  accountType: string;
  createDate: Date;
  verified: boolean;
}

export class PaymentSchedule {
  providerId: number;
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

export class ServiceProvider {
  iconUrl: string;
  providerName: string;
  providerDescription: string;
  providerAddress: string;
  id: number;
}
