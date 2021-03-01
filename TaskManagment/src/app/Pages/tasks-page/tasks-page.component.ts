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
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent implements OnInit {
  public form!: FormGroup;
  public LogoUrl = '../assets/logo.png';
  public user!: User;
  public jobs$!: Job[];

  constructor(private service: DataService, private fb: FormBuilder, private toastr: ToastrService, private util: UtilServices ) {

    this.form = this.fb.group({
      DepartmentId: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
  });
}


  ngOnInit(): void {
    this.user = Security.getUser();
    this.jobs$ = this.user.jobs;
  }

  showDiv = {
    showDepart: false,
    showInfo: false,
    showJobs: false,
    showShared: false,
    showHours: false,
    previous : false,
    current : false,
    next : false
  }

  submit(){

  }

  teste(){
    console.log(Security.getUser());
    console.log(this.form.value);
  }

}
