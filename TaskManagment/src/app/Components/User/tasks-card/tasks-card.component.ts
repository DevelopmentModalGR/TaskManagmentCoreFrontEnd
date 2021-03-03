import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/job.model';


@Component({
  selector: 'app-tasks-card',
  templateUrl: './tasks-card.component.html',
  styleUrls: ['./tasks-card.component.css']
})

export class TasksCardComponent implements OnInit {

  @Input() job!: Job;


  public showDiv = {
    showStart: false,
    showPause: false,
  };
  public mode = 'play';

  constructor() { }

  ngOnInit(): void {
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

}
