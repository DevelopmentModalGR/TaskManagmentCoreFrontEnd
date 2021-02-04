import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Department } from 'src/app/Models/department.model';
import { User } from 'src/app/Models/user.model';
import { Security } from 'src/app/Utils/security.util.component';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'https://localhost:3000/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {
        const token = Security.getToken();
        const headers = new HttpHeaders().set('Authorization', 'bearer ${token}');
        return headers;
    }

    getUsers() {
        return this.http.get<User[]>(`${this.url}/users`);
    }

    authenticate(data: any) {
        return this.http.post(`${this.url}/users/login`, data);
    }

    refreshToken() {
        return this.http.post(
            `${this.url}/users/login`,
            null,
            { headers: this.composeHeaders() }
        );
    }

    createUser(data: any) {
        return this.http.post(`${this.url}/users/newuser`, data, { headers: this.composeHeaders() });
    }

    resetPassword(data: any) {
        return this.http.post(`${this.url}/users/reset-password`, data);
    }

    getProfile() {
        return this.http.get(`${this.url}/users`, { headers: this.composeHeaders() });
    }

   /*  updateProfile(data: any) {
        return this.http.put(`${this.url}/users`, data, { headers: this.composeHeaders() });
    } */
}
