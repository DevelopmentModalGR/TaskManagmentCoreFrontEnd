import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { Security } from 'src/app/Utils/security.util.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  public user!: User;

  constructor(private router: Router, private service: DataService, private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.minLength(7),
        Validators.maxLength(40),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.required
      ])]
    });
  }

  ngOnInit(): void {
    this.user = Security.getUser();
    this.busy = true;
    this.delay(5000);
    this.busy = false;
  }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  submit() {
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        async (data: any) => {
          await this.delay(2300);
          this.toastr.success('Bem Vindo! ', 'Login com Sucesso!');
          this.setUser(data.user, data.token);
          this.busy = false;
          await this.delay(800);
          this.router.navigate(['/']);
          window.location.reload();
        },
        (err) => {
          console.log(err);
          this.busy = false;
          this.toastr.error('', 'Usuario ou Senha Invalidos!');
          this.router.navigate(['/login']);
        }
      );
  }

  setUser(user: User, token: string) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }

}
