import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-funding-account',
  templateUrl: './funding-account.page.html',
  styleUrls: ['./funding-account.page.scss'],
})
export class FundingAccountPage implements OnInit {
  step = 1;
  user: User = {
    userId: 0,
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    phone: '',
    occupation: '',
    gender: '',
    dob: '',
    income: '',
    createDateTime: null,
    updateDateTime: null,
  };

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    gender: new FormControl(''),
  });

  constructor() {}

  next() {
    this.step = this.step + 1;
    // this.user = this.profileForm.value;
    console.log(this.user);
    
  }

  previous() {
    this.step = this.step - 1;
  }

  ngOnInit() {}
}
