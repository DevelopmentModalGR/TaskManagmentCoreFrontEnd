import { Security } from 'src/app/Utils/security.util.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user!: User;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.user = Security.getUser();
  }

  Logout(){
    Security.clear();
    this.router.navigate(['/login']);
    this.user.name = "";
  }
  Teste(){
    console.log(this.user.name);
    console.log(Security.getUser())
  }

}
