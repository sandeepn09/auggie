import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-card',
  templateUrl: './min-card.component.html',
  styleUrls: ['./min-card.component.scss'],
})
export class MinCardComponent implements OnInit {

  @Input("cardNumber") cardNumber: number;
  @Input("expirationDate") expirationDate: Date;
  @Input("cardId") cardId: number;

  constructor() { }

  ngOnInit() {}

}
