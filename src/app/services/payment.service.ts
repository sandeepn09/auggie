import { Injectable } from "@angular/core";

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

  constructor() {}

  public getRecords(): Record[] {
    return this.records;
  }

  public getRecordsById(id: number): Record {
    return this.records[id];
  }
}
