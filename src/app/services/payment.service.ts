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
        paymethod: 'xxxx-xxxx-xxxx-1234',
      
      id: 0,
      read: false,
    }
  ];

  constructor() {}

  public getRecords(): Record[] {
    return this.records;
  }

  public getRecordsById(id: number): Record {
    return this.records[id];
  }
}
