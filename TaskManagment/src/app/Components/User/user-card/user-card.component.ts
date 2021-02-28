import { Security } from 'src/app/Utils/security.util.component';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { DataService } from 'src/app/Services/data.service.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UtilServices } from 'src/app/Services/utilServices.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public profilePicUrl = '../assets/profile-pic1.png';
  public user!: User;
  public form!: FormGroup;


  constructor(private service: DataService, private fb: FormBuilder, private toastr: ToastrService,private util: UtilServices ) {
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
    this.user = Security.getUser();
  }

  AlterarInfo(){

  }

  MostrarDepartamentos(){

  }

  showDiv = {
    showDepart: false,
    showInfo: false,
    previous : false,
    current : false,
    next : false
  }

  submit(){

  }
}
