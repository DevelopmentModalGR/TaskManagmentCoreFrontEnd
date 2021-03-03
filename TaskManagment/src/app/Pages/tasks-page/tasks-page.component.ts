import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Job } from 'src/app/Models/job.model';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { UtilServices } from 'src/app/Services/utilServices.service';
import { Security } from 'src/app/Utils/security.util.component';

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
  public user2!: User;
  public allJobs!: Job[];
  public busy = false;

  //

  scroll!: any[];
  array!: any[];
  sum = 2;
  throttle = 10;
  scrollDistance = 1;
  scrollUpDistance = 1;
  direction = '';
  modalOpen = false;
  total!: number;

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private util: UtilServices
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
    this.allJobs.length = this.sum;
  }

  showDiv = {
    showDepart: false,
    showInfo: false,
    showJobs: false,
    showShared: false,
    showHours: false,
    previous: false,
    current: false,
    next: false,
    default: false,
  };

  submit() {}

  teste() {
    console.log(Security.getUser());
    console.log("user2 abaixo: ");console.log(this.user2);
    console.log("user abaixo:");console.log(this.user);
    console.log("jobs abaixo: ");console.log(this.jobs$);
    console.log(`alljobs abaixo:`);console.log(this.allJobs);
    this.setLenght();
  }

   addItems(startIndex: any, endIndex: any) {
    console.log("entrou no additems");
     this.setJobs();
    if(endIndex < this.total){
      this.allJobs.length = endIndex;
    }
    else{
      this.allJobs.length = this.total;
      this.sum = this.total;
    }


    console.log("endindex abaixo ");console.log(endIndex);
    console.log("alljobs index abaixo: ");console.log(this.allJobs.length);
    this.busy = false;

/*     for (let i = 0; i <= endIndex; ++i) {
      this.array.length = endIndex;
      this.array.push(this.user.jobs[4]);
    } */
  }

  appendItems(startIndex: any, endIndex: any) {
    this.addItems(startIndex, endIndex);
    console.log("entrou no appenditems");
  }

  onScroll() {
    this.busy = true;
    console.log('scroll sucesso!');
    // add another 2 items
    const start = this.sum;
    this.sum += 4;
    this.appendItems(start, this.sum);

    this.direction = 'down';
  }

  setUser(user: any) {
    this.service.getUserById(this.user.id).subscribe((comp: User) => {
       user = comp;
       console.log("entrou no setuser");
    });
  }

  setJobs() {
    this.service.getJobs().subscribe((comp: Job[]) => {
      this.total = comp.length;
      comp.length = this.sum;
      this.allJobs = comp;
      console.log("entrou no setjobs");
      console.log("valor total");console.log(this.total);
    });
  }

  setLenght(){
    console.log("entrou no setlenght");
    this.setJobs();
  }

}
