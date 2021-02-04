import { Security } from '../Utils/security.util.component';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router) { }

    canActivate() {
        const token = Security.getToken();
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
