import { Company } from './../../Models/company.model';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { Security } from 'src/app/Utils/security.util.component';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  public form!: FormGroup;
  public busy = false;
  public user!: User;



  constructor(private router: Router, private service: DataService, private fb: FormBuilder, private toastr: ToastrService) {
    /* this.user.companyId = 1; this.user.isActive = true; this.user.isAdmin = false; this.user.role = "employee"; */



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
      companyId: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
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

  }

/*   checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notSame: true }
} */

  submit() {
    this.form.patchValue({isActive: 1,role: "employee"})
    this.busy = true;
    this
      .service
      .createUser(this.form.value)
      .subscribe(
        (data: any) => {
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

/*   setUser(user: User, token: string) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }
 */
}
