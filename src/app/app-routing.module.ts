import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from './features/inicial-page/pages/inicial-page.component';
import { SignupComponent } from './features/singup/pages/signup.component';
import { LoginComponent } from './features/login/pages/Login.component';

const routes: Routes = [
  {path:'', component:InicialPageComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
