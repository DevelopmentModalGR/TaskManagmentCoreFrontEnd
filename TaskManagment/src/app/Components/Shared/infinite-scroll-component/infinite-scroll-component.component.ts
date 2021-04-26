import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service.component';
import { Utilities } from 'src/app/Utils/utilities.util.component';

@Component({
  selector: 'app-infinite-scroll-component',
  templateUrl: './infinite-scroll-component.component.html',
  styleUrls: ['./infinite-scroll-component.component.css']
})
export class InfiniteScrollComponent {

  @Input() item!: any;
  @Input() services!: any;

   //Scroll Parameters
   Shareditems = 12;
   ItemsPage = 1;
   ChecklistPage = 1;
   ChecklistItems = 3;
   throttle = 150;
   scrollDistance = 1;
   modalOpen = false;
   scrollDisabled = false;
   scrollChecklistDisabled = false;
   totalShareditems! : number;
   totalChecklistitems! : number;
   arrayItens: any;

  constructor( private service: DataService
    ){}

  async onScroll() {
    console.log('scroll sucesso!');

    //Verifica se o contador é maior que o numero de itens, caso verdadeiro, desativa o scroll
    if(this.Shareditems >= this.totalShareditems) {
      this.scrollDisabled = true;console.log('scrolldisabled');
    }
    else{
      //incremento de itens no array
      this.scrollDisabled = false;
      await Utilities.delay(2000);
      this.getNextItens();
    }
  }

  getNextItens() {
 /*    this.services.subscribe(res => {
      this.arrayItens.push(...res.items)
      this.totalShareditems = res.totalItemCount;
      console.log(res);
      console.log(this.arrayItens);
      this.ItemsPage++;
      }); */
  }
}
