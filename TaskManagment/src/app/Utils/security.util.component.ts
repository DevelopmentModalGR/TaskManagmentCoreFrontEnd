import { User } from "src/app/Models/user.model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('TaskManagmentUser', btoa(data));
        localStorage.setItem('TaskManagmentToken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('TaskManagmentUser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('TaskManagmentToken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('TaskManagmentUser');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null!;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('TaskManagmentToken');
        if (data) {
            return data;
        } else {
            return null!;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('TaskManagmentUser');
        localStorage.removeItem('TaskManagmentToken');
    }
}
