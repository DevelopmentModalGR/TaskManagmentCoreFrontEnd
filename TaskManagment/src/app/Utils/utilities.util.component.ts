import { Company } from './../Models/company.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user.model';

export class Utilities {

  public static mail: any;
  public static user: any;
  public static companies: any;
  public static validUser: boolean;

  public static SetSignUpEmail(email: any) {
    this.mail = email;
  }

  public static GetSignUpEmail() {
    return this.mail;
  }

  public static setUser(users: any)
  {
    this.user = users;
  }

  public static setCompanies(company: any)
  {
    this.companies = company;
  }

   public static SetValidUser(valid: boolean) {
    this.validUser = valid;
  }

  public static GetValidUser() {
    return this.validUser;
  }

  public static delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

}

