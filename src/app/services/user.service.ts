import { User } from "../models/user/user-models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {

    user: User = {
        userId: 0,
        firstName: 'John',
        lastName: 'Doe',
        address: '100 Central Street',
        city: 'NewYork',
        state: 'NY',
        postalCode: '',
        email: 'pmharkins@gmail.com',
        phone: '212-345-0000',
        occupation: '',
        gender: '',
        dob: '',
        income: '',
        createDateTime: null,
        updateDateTime: null,
      };

    constructor() {}

    public getUser(): User {
        return this.user;
      }
}
