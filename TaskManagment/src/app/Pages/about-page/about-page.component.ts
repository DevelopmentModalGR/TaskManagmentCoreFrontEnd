import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  public LogoUrl = '../assets/logo.png';
  public title   = 'Projeto Criado Por Renato Santos';
  public buttonText  = 'SAIBA MAIS';

  constructor() { }

  ngOnInit(): void {
  }

}
