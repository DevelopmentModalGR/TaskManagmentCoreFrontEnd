import { Injectable } from '@angular/core';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UtilServices {
   public mail!: any;

  constructor() { }

    delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

    SetSignUpEmail(email: any){
      this.mail = email;
    }

    GetSignUpEmail(){
      return this.mail;
    }



}
