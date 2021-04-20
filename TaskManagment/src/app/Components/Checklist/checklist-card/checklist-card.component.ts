import { Checkout } from './../../../Models/checkout.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowChecklistJobsModal } from 'src/app/Pages/SharedModals/Show-Checklist-Jobs-Modal/Show-Checklist-Jobs-Modal';
import { DataService } from 'src/app/Services/data.service.component';
import { Job } from 'src/app/Models/job.model';

export interface DialogData {
  ChecklistId: number;
  jobs: Array<Job>;
}


@Component({
  selector: 'app-checklist-card',
  templateUrl: './checklist-card.component.html',
  styleUrls: ['./checklist-card.component.css']
})
export class ChecklistCardComponent implements OnInit{

  @Input() checklist!: Checkout;

  public today: number = Date.now();
  public showDiv = {
    showStart: false,
    showPause: false,
  };
  public mode = 'play';

  ChecklistId!: number;
  jobs!: Array<Job>;

  constructor(
    public dialog: MatDialog,
    private service: DataService
    ){ }

  ngOnInit(): void {
    console.log("model Checklist:");console.log(this.checklist);
  }

  changeMode(mode: string) {
    this.mode = mode;
  }

  OpenCreateJobs(){
    console.log('Checklist id ao clicar');console.log(this.checklist.id);
      const dialogRef = this.dialog.open(ShowChecklistJobsModal,
        {
          data: {ChecklistId: this.checklist.id, jobs: this.checklist.jobs},
          panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
}
