import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Components/Checklist/checklist-card/checklist-card.component';
import { Job } from 'src/app/Models/job.model';
import { DataService } from 'src/app/Services/data.service.component';
import { Utilities } from 'src/app/Utils/utilities.util.component';


@Component({
  selector: 'app-create-checklist-modal',
  templateUrl: './Show-Checklist-Jobs-Modal.html',
  styleUrls: ['./Show-Checklist-Jobs-Modal.css']
})
export class ShowChecklistJobsModal implements OnInit{

  //Scroll Parameters
  Shareditems = 12;
  ItemsPage = 1;
  ChecklistPage = 1;
  ChecklistItems = 3;
  throttle = 150;
  scrollDistance = 1;
  modalOpen = false;
  scrollSharedDisabled = false;
  scrollChecklistDisabled = false;
  totalShareditems! : number;
  totalChecklistitems! : number;
  busy = false;

  public jobsShared$!: Job[];
  public ChecklistId!: number;

  constructor(
    private service: DataService,
    public dialogRef: MatDialogRef<ShowChecklistJobsModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    this.getjobs();
    console.log("data.checklistId:");console.log(this.data.ChecklistId)
    this.jobsShared$ = this.data.jobs;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getjobs() {
    this.service.getChecklistsById(this.data.ChecklistId).subscribe(res => {
      console.log("testando metodo");console.log(res);
      });
  }

  setJobs() {
    this.service.getPagedJobs(this.ItemsPage, this.Shareditems).subscribe(res => {
      this.jobsShared$ = res.items;
      this.totalShareditems = res.totalItemCount;
      console.log(res);
      this.ItemsPage++;
      });
  }

  getNextJobs() {
    this.service.getPagedJobs(this.ItemsPage, this.Shareditems).subscribe(res => {
      this.jobsShared$.push(...res.items)
      this.totalShareditems = res.totalItemCount;
      console.log(res);
      console.log(this.jobsShared$);
      this.ItemsPage++;
      });
  }

  async onScrollShared() {
    console.log('scroll sucesso!');

    //Verifica se o contador é maior que o numero de itens, caso verdadeiro, desativa o scroll
    if(this.Shareditems >= this.totalShareditems) {
      this.scrollSharedDisabled = true;console.log('scrolldisabled');
    }
    else{
      this.busy = true;

      //incremento de itens no array
      this.scrollSharedDisabled = false;
      await Utilities.delay(2000);
      this.getNextJobs();
      this.busy = false;
    }
  }

}
