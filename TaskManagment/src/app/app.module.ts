
import { DataService } from 'src/app/Services/data.service.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { FramePageComponent } from './Pages/master/master.component';
import { LoadingComponent } from './Components/Shared/loading/loading.component';
import { Security } from './Utils/security.util.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { SignupPageComponent } from './Pages/signup-page/signup-page.component';
import { TasksPageComponent } from './Pages/tasks-page/tasks-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavbarComponent,
    FramePageComponent,
    LoadingComponent,
    SignupPageComponent,
    TasksPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
