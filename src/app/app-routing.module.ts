import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site/pages/home/home.component';
import { RegistrationFormComponent } from './site/components/registration-form/registration-form.component';
import { HomeNewsComponent } from './site/components/home-news/home-news.component';
import { LoginFormComponent } from './site/components/login-form/login-form.component';
import { DashboardComponent } from './site/pages/dashboard/dashboard.component';
import { TestAppComponent } from './site/components/test-app/test-app.component';

const routes: Routes = [{
  path: '', //simula la ruta vacia
  component: HomeComponent,
  children:[{
    path:'',
    redirectTo: 'home',
    pathMatch: 'full' 
},{
  path: 'home', // /region
  component: HomeNewsComponent,
},{
    path: 'singup', // /region
    component: RegistrationFormComponent,
},{
  path: 'test', // /region
  component: TestAppComponent,
},{
  path: 'login', // /region
  component: LoginFormComponent,
}],
},{
  path: 'dashboard', // /region
  component: DashboardComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





/* const routes: Routes = [{
  path: '', //simula la ruta vacia
  component: HomeComponent,
  pathMatch: 'full'
},{
    path: 'home', // /region
    component: HomeComponent,
},{
  path: 'pve', // /region
  component: PveComponent,
},{
  path: 'main', // /region
  component: MainComponent,

  children:[{
    path:'',
    redirectTo: 'news',
    pathMatch: 'full' 
},{
    path: 'news', // /region
    component: MainNewsComponent,
},{
    path: 'shop', // /region
    component: MainShopComponent,
},{
    path: 'pve', // /region
    component: MainPveComponent,
}]
}]; */