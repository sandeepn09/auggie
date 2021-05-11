import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-popover',
  templateUrl: './validation-popover.component.html',
  styleUrls: ['./validation-popover.component.scss'],
})
export class ValidationPopoverComponent implements OnInit {

  message = '';
  
  constructor() { }

  ngOnInit() {}

}
