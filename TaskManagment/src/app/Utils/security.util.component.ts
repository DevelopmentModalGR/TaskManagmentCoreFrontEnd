import { User } from 'src/app/Models/user.model';

export class Security {
  public static set(user: User, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem('taskmanagmentuser', btoa(data));
    localStorage.setItem('taskmanagmenttoken', token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem('taskmanagmentuser', btoa(data));
  }

  public static getUser(): User {
    const data = localStorage.getItem('taskmanagmentuser');
    if (data) {
      return JSON.parse(atob(data));
    } else {
      return null!;
    }
  }

  public static setToken(token: string) {
    localStorage.setItem('taskmanagmenttoken', token);
  }

  public static getToken(): string {
    const data = localStorage.getItem('taskmanagmenttoken');
    if (data) {
      return data;
    } else {
      return null!;
    }
  }

  public static hasToken(): boolean {
    if (this.getToken()) return true;
    else return false;
  }

  public static clear() {
    localStorage.removeItem('taskmanagmentuser');
    localStorage.removeItem('taskmanagmenttoken');
  }
}
