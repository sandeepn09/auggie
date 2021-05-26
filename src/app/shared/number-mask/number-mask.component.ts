import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-mask',
  templateUrl: './number-mask.component.html',
  styleUrls: ['./number-mask.component.scss'],
})
export class NumberMaskComponent implements OnInit {

  @Input('acctNum') acctNum;
  @Input('createDt') createDt;

  constructor() { }

  ngOnInit() {}

}
