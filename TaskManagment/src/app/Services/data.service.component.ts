import { Checkout } from './../Models/checkout.model';
import { Observable } from 'rxjs';
import { Companies } from './../Models/Companies';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from 'src/app/Models/department.model';
import { User } from 'src/app/Models/user.model';
import { Security } from 'src/app/Utils/security.util.component';
import { Company } from '../Models/company.model';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Job } from '../Models/job.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //#region Atributos
  public url = 'https://localhost:5001';
  //#endregion

  constructor(private http: HttpClient) {}

  public composeHeaders() {
    const token = Security.getToken();
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`); // template literals
    return headers;
  }

  //#region Metodos

  authenticate(data: any) {
    console.log('teste');
    return this.http.post(`${this.url}/users/login`, data);
  }

  createUser(data: any) {
    return this.http.post(`${this.url}/users/newuser`, data);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.url}/users/${id}`);
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.url}/jobs`);
  }

  getPagedJobs(itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/jobs/Page/${itemsNum}`);
  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.url}/company`);
  }

  getChecklists(): Observable<Checkout[]>{
    return this.http.get<Checkout[]>(`${this.url}/Checkout`);
  }

  getPagedChecklist(itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/checkout/Page/${itemsNum}`);
  }


  getPagenetedJobs(itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/jobs/Page/${itemsNum}`);
  }

  getProfile() {
    return this.http.get(`${this.url}/users`, {
      headers: this.composeHeaders(),
    });
  }

  refreshToken() {
    return this.http.post(`${this.url}/users/login`, null, {
      headers: this.composeHeaders(),
    });
  }

  resetPassword(data: any) {
    return this.http.post(`${this.url}/users/reset-password`, data);
  }

  //#endregion

  /*  updateProfile(data: any) {
        return this.http.put(`${this.url}/users`, data, { headers: this.composeHeaders() });
    } */
}
