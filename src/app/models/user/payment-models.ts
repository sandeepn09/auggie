import { NumberFormatStyle } from "@angular/common";

export class BankInfo {
  name: string;
  accountNumber: number;
  routingNumber: number;
  accountType: string;
  createDate: Date;
  verified: boolean;
}

export class PaymentSchedule {
  providerName: string;
  description: string;
  amount: number;
  payMethod: string;
  recurring: boolean;
  payDate: Date;
  logo_url: string;
}

export class LogoResponse {
  statusCode: number;
  response: { logo: {}; icon: {} };
}

export class ServiceProvider {
  provider: boolean;
  logoUrl: string;
  name: string;
  description: string;
  address: string;
  icon: string;
  id: number;
}
