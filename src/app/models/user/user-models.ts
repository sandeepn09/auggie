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
  gender: string;
  dob: string;
  income: string
  createDateTime: Date;
  updateDateTime: Date;
}

export class PaymentHistory {
  amount: number;
  date: Date;
  payee: string;
}
