import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TestAppComponent } from './components/test-app/test-app.component';
import { PostitComponent } from './components/postit/postit.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistrationFormComponent,
    HomeNewsComponent,
    LoginFormComponent,
    DashboardComponent,
    TestAppComponent,
    PostitComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SiteModule { }
