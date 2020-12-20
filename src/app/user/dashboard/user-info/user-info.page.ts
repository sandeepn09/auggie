import { Component, OnInit } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user/user-models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

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
    createDateTime: null,
    updateDateTime: null,
  };
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
