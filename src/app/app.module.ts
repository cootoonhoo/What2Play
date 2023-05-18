import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { InicialPageModule } from './features/inicial-page/inicial-page.module';
import { SingupModule } from './features/singup/signup.module';
import { LoginModule } from './features/login/login.module';
import { AboutUsModule } from './features/about-us/about-us.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    SharedModule,
    InicialPageModule,
    SingupModule,
    LoginModule,
    AboutUsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
