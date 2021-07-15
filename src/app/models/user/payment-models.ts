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
  amount: number;
  paymentDate: Date;
  providerName:string;
  bankPaymentId: number;
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

export class CardInfo {
  id: number;
  userId: number;
  cardNumber: number;
  cardDescription: string;
  fundingAccount: number;
  cardBalance: number;
  expirationDate: Date;
  issueDate: Date;
  securityCode: number;
  active: boolean;
}

export class Payment {
  id: number;
  userId: number;
  bankId: number;
  providerName: string;
  providerId: number;
  paymentAmount: number;
  paymentDate: Date;
  active: boolean;
}
