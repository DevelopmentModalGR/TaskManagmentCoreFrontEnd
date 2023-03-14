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


  constructor(private service: DataService, private fb: FormBuilder, private toastr: ToastrService, private util: UtilServices ) {
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

  showDiv = {
    showDepart: false,
    showInfo: false,
    previous : false,
    current : false,
    next : false
  }

  ngOnInit(): void {
    this.user = Security.getUser();
  }

  submit(){
    const loginData  = Security.getUser();
    this.showDiv.showInfo = false
    const getDataFromForm = this.formatFormData(this.form, loginData);
    this.form.setValue(getDataFromForm);
    const updatePayload = {
                    ...getDataFromForm,
                    id: loginData.id
    };
    this.updateUser(updatePayload);
  }

  updateUser(updatePayload: unknown) {
      this.service.updateProfile(updatePayload).subscribe(
        async (data: any) => {
          this.toastr.success("Atualização Efetuada com Sucesso!");
          console.log("data da atualizacao de form", data);
        },
        (err) => {
          this.toastr.error("Erro ao atualizar usuário", this.returnValidError(err));
          console.log(err);
        }
      );
    }

  formatFormData(form: FormGroup, user: User){
    const data = {
      name: form.get('name')?.value,
      email: form.get('email')?.value,
      password: form.get('password')?.value,
      confirmPassword: form.get('confirmPassword')?.value,
      companyId: user.companyId,
      isActive: user.isActive,
      role: user.role
    }
    return data;
  }

  returnValidError(err: any){
    if(err.error){
      return err.error
    }
    return err
  }

  cancelarAlteracoes(){
    this.showDiv.showInfo = false;
    this.form.reset();
  }
}


