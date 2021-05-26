import { Component, Input, OnInit } from '@angular/core';
import { AuthConstants } from 'src/app/config/auth-constants';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  name: string;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
   this.init();
  }

  async init() {
    let value:any = await this.storageService.get(AuthConstants.AUTH);
    console.log("name", value.firstName);
    this.name = value.firstName;
  }

}
