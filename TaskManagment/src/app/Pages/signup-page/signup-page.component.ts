import { UtilServices } from './../../Services/utilServices.service';
import { Company } from './../../Models/company.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { Security } from 'src/app/Utils/security.util.component';
import { Utilities } from 'src/app/Utils/utilities.util.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public form!: FormGroup;
  public busy = false;
  public password!: string;
  public passwordConfirm!: string;
  public user!: User;
  public companies!: Company[];

  constructor(private router: Router, private service: DataService, private fb: FormBuilder, private toastr: ToastrService,private util: UtilServices ) {

    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(40),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])],
      confirmPassword: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])],
      companyId:  ['', Validators.compose([
        Validators.required
      ])],
      isActive: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30)
      ])],
      role: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30)
      ])],
    });
  }

  ngOnInit(): void {
    const mail = Utilities.GetSignUpEmail();
    var myJSON = JSON.stringify(mail);

    if(mail == null){
        this.router.navigate(['/']);
     }
     else{
        this.form.patchValue({email: myJSON.substring(10, myJSON.length - 2)});
     }
    
    this.setCompanies();
    console.log(this.companies)
    this.busy = true;
    this.util.delay(5000)
    this.busy = false;
  }

  submit() {
    this.form.patchValue({isActive: 1,role: "employee"})
    this.busy = true;
    this
      .service
      .createUser(this.form.value)
      .subscribe(
        async (data: any) => {
          console.log(this.form.value);
          this.busy = false;
          this.toastr.success(data.message, 'Cadastro Efetuado com Sucesso!');
        },
        (err: any) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('Erro ao Efetuar Cadastro!');
        }
      );
  }

    setCompanies() {
    this.service.getCompanies().subscribe((comp: Company[]) => {
      this.companies = comp;
    });
  }

  teste(){
    console.log(this.companies);
    console.log(this.form.value);
    console.log(Utilities.GetSignUpEmail());
  }
/*   setUser(user: User, token: string) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }
 */
}



