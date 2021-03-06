import { Checkout } from './../../Models/checkout.model';
import { Utilities } from './../../Utils/utilities.util.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Job } from 'src/app/Models/job.model';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { UtilServices } from 'src/app/Services/utilServices.service';
import { Security } from 'src/app/Utils/security.util.component';
import { MatDialog } from '@angular/material/dialog';
import { ShowChecklistJobsModal } from '../SharedModals/Show-Checklist-Jobs-Modal/Show-Checklist-Jobs-Modal';

export interface DialogData {
  ChecklistId: number;
}


@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css'],
})

export class TasksPageComponent implements OnInit {
  public form!: FormGroup;
  public LogoUrl = '../assets/logo.png';
  public user!: User;
  public jobs$!: Job[];
  public jobsShared$!: Job[];
  public checklist$!: Checkout[];
  public busy = false;

  //Labels Parameters
  public showDiv = {
    showDepart: false,
    showInfo: false,
    showJobs: false,
    showShared: false,
    showHours: false,
    showChecklist: false,
    previous: false,
    current: false,
    next: false,
    default: false,
  };

  //Scroll Parameters
  Shareditems = 12;
  ItemsPage = 1;
  ChecklistPage = 1;
  ChecklistItems = 12;
  throttle = 150;
  scrollDistance = 1;
  modalOpen = false;
  scrollSharedDisabled = false;
  scrollChecklistDisabled = false;
  totalShareditems! : number;
  totalChecklistitems! : number;
  arrayItens: any;
  ChecklistId!: number;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private util: UtilServices,
    public dialog: MatDialog
  ) {
    this.form = this.fb.group({
      DepartmentId: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(40),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.user = Security.getUser();
    console.log("user");console.log(this.user);
    this.jobs$ = this.user.jobs;
    this.setJobs();
    this.setChecklist();
  }

  submit() {}

  teste() {
    console.log(Security.getUser());
    console.log("user abaixo:");console.log(this.user);
    console.log("jobs abaixo: ");console.log(this.jobs$);
    console.log(`checklist lenght abaixo abaixo:`);console.log(this.checklist$.length);
    console.log(`total items abaixo:`);console.log(this.totalShareditems);
    console.log(`numero de itens`);console.log(this.Shareditems);
    const dialogRef = this.dialog.open(ShowChecklistJobsModal,
      {
        width: '250px',
        data: {CheckId: this.ChecklistId},
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

  async onScrollChecklist(){
    console.log('scroll sucesso!');

    //Verifica se o contador é maior que o numero de itens, caso verdadeiro, desativa o scroll
    if(this.ChecklistItems >= this.totalChecklistitems) {
      this.scrollChecklistDisabled = true;console.log('scrolldisabled');
    }
    else {
      this.busy = true;

      //incremento de itens no array
      this.scrollChecklistDisabled = false;
      await Utilities.delay(2000);
      this.getNextChecklists();
      this.busy = false;
    }
  }

  setUser(user: any) {
    this.service.getUserById(this.user.id).subscribe((comp: User) => {
       user = comp;
       this.jobs$ = user.jobs;
       console.log("entrou no setuser");
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

  async setChecklist() {
     this.service.getPagedChecklist(this.ChecklistPage,this.ChecklistItems).subscribe(data  => {
       this.checklist$ = data.items;
       this.totalChecklistitems = data.totalItemCount;
       console.log(data);
       this.ChecklistPage++;
    });
  }



  getNextChecklists() {
    this.service.getPagedChecklist(this.ChecklistPage, this.ChecklistItems).subscribe(res => {
      this.checklist$.push(...res.items)
      this.totalChecklistitems = res.totalItemCount;
      console.log(res);
      this.ChecklistPage++;
      });
  }

  async changeLabel(option: any){

    switch (option) {
      case 0:
        this.showDiv.showJobs = true;
        this.showDiv.showShared = false;
        this.showDiv.showHours = false;
        this.showDiv.showChecklist = false;
        this.busy = true;
        this.setUser(this.user);
        await Utilities.delay(1200);
        this.busy = false
        break;
        case 1:
        this.showDiv.showJobs = false;
        this.showDiv.showShared = true;
        this.showDiv.showHours = false;
        this.showDiv.showChecklist = false;
        this.busy = true;
        //this.setLenght()
        await Utilities.delay(1200);
        this.busy = false
        break;
        case 2:
        this.showDiv.showJobs = false;
        this.showDiv.showShared = false;
        this.showDiv.showHours = true;
        this.showDiv.showChecklist = false;
        this.busy = true;
        await Utilities.delay(1200);
        this.busy = false
        break;
        case 3:
        this.showDiv.showJobs = false;
        this.showDiv.showShared = false;
        this.showDiv.showHours = false;
        this.showDiv.showChecklist = true;
        this.busy = true;
        await Utilities.delay(1200);
        this.busy = false
        break;

      default:
        break;
    }
  }

  //METODOS USADOS UTILIZANDO REQUISIÇÃO SEM PAGINAÇÃO
 /*  setLenght(){
    console.log("entrou no setlenght");
    this.setJobs();
  }

  setJobsPageneted(itemnum: number){
    this.service.getPagenetedJobs(this.itemsNum).subscribe((comp : Job[]) => {
      this.jobsShared$ = comp;
      console.log(comp);
    });
  }

  setJobs() {
    this.service.getJobs().subscribe((comp: Job[]) => {
      this.total = comp.length;
      comp.length = this.sum;
      this.allJobs = comp;
    });
  }

  async onScroll() {
    this.busy = true;
    console.log('scroll sucesso!');
    const start = this.sum;
    this.sum += 6;
    this.itemsNum += 6;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  appendItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex);
    console.log("entrou no appenditems");
  }

  addItems(startIndex: any, endIndex: any) {
    console.log("entrou no additems");
     this.setJobs();
     this.setJobsPageneted(this.itemsNum);
    if(endIndex < this.total){
      this.allJobs.length = endIndex;
    }
    else{
      this.allJobs.length = this.total;
      this.sum = this.total;
    }
    this.busy = false;
  } */

}
