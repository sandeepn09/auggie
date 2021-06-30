import { BankInfo } from "./payment-models";

export class User {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  occupation: string;
  phone: string;
  countryCode: string;
  gender: string;
  dob: string;
  annualIncome: string;
  createDateTime: Date;
  updateDateTime: Date;
}

export class PaymentHistory {
  amount: number;
  date: Date;
  payee: string;
}

export class AuthRequest {
  username: string;
  password: string;
}

export class SignupRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export class UserProfile {
  userDetails: User;
  banks: BankInfo[];
}

export class AuthResponse {
  userId: number;
  email: string;
  firstName: string;
  hasBanks: boolean;
  hasCards: boolean;
  lastName: string;
  profileComplete: boolean;
}

export class AppResponse {
  message: string;
  code: number;
  httpStatus: string;
  details: {}
}

