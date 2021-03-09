import { Checkout } from './../../../Models/checkout.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-card',
  templateUrl: './checklist-card.component.html',
  styleUrls: ['./checklist-card.component.css']
})
export class ChecklistCardComponent{

  @Input() checklist!: Checkout;

  public today: number = Date.now();
  public showDiv = {
    showStart: false,
    showPause: false,
  };
  public mode = 'play';

  constructor() { }

  changeMode(mode: string) {
    this.mode = mode;
  }

}
