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

  headers: object;

  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + sessionStorage.getItem('token')
      }),
    }
  }

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
    return this.http.get<Job[]>(`${this.url}/jobs`, this.headers);
  }

  getPagedJobs(PageNum: number, itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/jobs/page/${PageNum}/${itemsNum}`, this.headers);
  }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.url}/company`, this.headers);
  }

  getChecklists(): Observable<Checkout[]>{
    return this.http.get<Checkout[]>(`${this.url}/Checkout/`, this.headers);
  }

  getPagedChecklist(PageNum: number, itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/checkout/page/${PageNum}/${itemsNum}`, this.headers);
  }

  getChecklistsById(ChecklistId: number): Observable<Checkout[]>{
    return this.http.get<Checkout[]>(`${this.url}/Checkout/${ChecklistId}`, this.headers);
  }


  getPagenetedJobs(itemsNum: number): Observable<any> {
    return this.http.get<any>(`${this.url}/jobs/Page/${itemsNum}`, this.headers);
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
