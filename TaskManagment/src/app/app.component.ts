import { Component } from '@angular/core';
import { TaskManagment } from 'src/models/TaskManagment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public taskManagment: TaskManagment[] = [];
  public title: String = "Comapany";

constructor() {
  this.taskManagment.push(new TaskManagment(1, 'inicializar', false));
  this.taskManagment.push(new TaskManagment(2, 'verificar', false));
  this.taskManagment.push(new TaskManagment (3, 'atualizar', true));
  
}
      remove(taskManagment: TaskManagment)  {
     const index = this.taskManagment.indexOf(taskManagment)
     if (index != 1) {
       this.taskManagment.splice(index, 1);
     }

    }

    MarkAsDone() {


    }

    MarkAsUndone() {


   }

}
