import { FramePageComponent } from './Pages/master/master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { AuthService } from './Services/auth.service.component';

const routes: Routes = [{
  path: '',
  component: FramePageComponent,
  children: [
    { path: '', component: HomePageComponent},
    { path: 'login', component: LoginPageComponent,/* canActivate: [AuthService] */}
  ]
}];

/* const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path:'login', component: LoginPageComponent}
  ]; */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
