import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.page.html',
  styleUrls: ['./profile-view.page.scss'],
})
export class ProfileViewPage implements OnInit {
  step = 1;
  user: User = {
    userId: 0,
    firstName: 'William',
    lastName: 'Blake',
    address: '100 Central Street',
    city: 'New York',
    state: 'NY',
    postalCode: '11282',
    email: 'william.blake@gmail.com',
    phone: '+1 (415) 910 4587',
    occupation: 'Student',
    gender: '',
    dob: 'July 19, 1998',
    income: '$14,753',
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
