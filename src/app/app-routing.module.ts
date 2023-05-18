import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialPageComponent } from './features/inicial-page/pages/inicial-page.component';
import { SignupComponent } from './features/singup/pages/signup.component';
import { LoginComponent } from './features/login/pages/login.component';
import { AboutUsComponent } from './features/about-us/pages/about-us/about-us.component';
import { AuthGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  {path:'', component:InicialPageComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'about', component:AboutUsComponent},
  {path:'browser', loadChildren: () => import('./features/browser/browser.module').then(m => m.BrowserModule),  canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
