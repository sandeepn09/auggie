import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';

@Component({
  selector: 'app-pay-record',
  templateUrl: './pay-record.component.html',
  styleUrls: ['./pay-record.component.scss'],
})
export class PayRecordComponent implements OnInit {
  @Input() message: Message;

  constructor() { }

  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
