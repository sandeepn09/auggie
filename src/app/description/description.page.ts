import { Component, OnInit } from '@angular/core';
import { AuthConstants } from '../config/auth-constants';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  name: string;

  constructor(private storageService: StorageService) { }

  async ngOnInit() {
    let value:any = await this.storageService.get(AuthConstants.AUTH);
    console.log("Value", value.firstName);
    this.name = value.firstName;
  }

}
