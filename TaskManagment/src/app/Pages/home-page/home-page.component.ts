import { Companies } from './../../Models/Companies';
import { CompaniesUtil } from './../../Utils/companies.util.component';
import { ToastrService } from 'ngx-toastr';
import { UtilServices } from './../../Services/utilServices.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utilities } from 'src/app/Utils/utilities.util.component';
import { DataService } from 'src/app/Services/data.service.component';
import { Observable } from 'rxjs';
import { Company } from 'src/app/Models/company.model';
import { Security } from 'src/app/Utils/security.util.component';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public form: FormGroup;
  public LogoUrl = '../assets/logo.png';
  public companies$!: Observable<Company[]>;
  public user!: User;

  public companies!: Company[];

  constructor(
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService,
  ){
    this.form = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.minLength(7),
          Validators.maxLength(40),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.user = Security.getUser();
    this.getCompanies();
  }

  signUp(){
    Utilities.SetSignUpEmail(this.form.value);
    console.log(Utilities.GetSignUpEmail());
  }

  getCompanies() {
    this.service.getCompanies().subscribe((comp: Company[]) => {
      this.companies = comp;
    });
  }

  teste(){
    console.log(this.companies);
    console.log(this.form.value);
    console.log(Utilities.GetSignUpEmail());
  }
}
