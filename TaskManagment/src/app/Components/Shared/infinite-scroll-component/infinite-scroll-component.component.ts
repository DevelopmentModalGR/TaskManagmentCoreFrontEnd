import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll-component',
  templateUrl: './infinite-scroll-component.component.html',
  styleUrls: ['./infinite-scroll-component.component.css']
})
export class InfiniteScrollComponent {

  @Input() item!: any;

  scroll!: any[];
  array!: any[];
  sum = 2;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = "";
  modalOpen = false;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex: any, endIndex: any) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array[i] = this.item[i];
    }
  }

  appendItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex);
  }

  onScroll() {
    // add another 2 items
    const start = this.sum;
    this.sum += 2;
    this.appendItems(start, this.sum);

    this.direction = "down";
  }

}
