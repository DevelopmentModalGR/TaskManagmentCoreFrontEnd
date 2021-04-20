import { ShowChecklistJobsModal } from 'src/app/Pages/SharedModals/Show-Checklist-Jobs-Modal/Show-Checklist-Jobs-Modal';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UserCardComponent } from './Components/User/user-card/user-card.component';
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
import { UtilServices } from './Services/utilServices.service';
import { UserPageComponent } from './Pages/user-page/user-page.component';
import { LogoComponent } from './Components/Shared/logo/logo.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { TasksCardComponent } from './Components/User/tasks-card/tasks-card.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { InfiniteScrollComponent } from './Components/Shared/infinite-scroll-component/infinite-scroll-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChecklistCardComponent } from './Components/Checklist/checklist-card/checklist-card.component';
import { LoadingSmallComponent } from './Components/Shared/loading-small/loading-small.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    NavbarComponent,
    FramePageComponent,
    LoadingComponent,
    SignupPageComponent,
    TasksPageComponent,
    UserPageComponent,
    LogoComponent,
    UserCardComponent,
    AboutPageComponent,
    TasksCardComponent,
    InfiniteScrollComponent,
    ChecklistCardComponent,
    LoadingSmallComponent,
    ShowChecklistJobsModal
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatFormFieldModule,
    ToastrModule.forRoot()
  ],
  providers: [DataService, AuthService, UtilServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
