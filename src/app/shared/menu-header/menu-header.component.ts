import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
})
export class MenuHeaderComponent implements OnInit {

  @Input('name') name: string;

  constructor() { }

  ngOnInit() {}

}
