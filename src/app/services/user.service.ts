import { User } from "../models/user/user-models";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {

    user: User = {
        userId: 0,
        firstName: 'Paul',
        lastName: 'Harkins',
        address: '80 Barrington Ave',
        city: 'Nashua',
        state: 'NH',
        postalCode: '',
        email: 'pmharkins@gmail.com',
        phone: '603-204-1491',
        occupation: '',
        gender: '',
        createDateTime: null,
        updateDateTime: null,
      };

    constructor() {}

    public getUser(): User {
        return this.user;
      }
}
