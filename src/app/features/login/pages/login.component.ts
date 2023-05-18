import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../models/loginData.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })
  hasUserFailedAuthentication : boolean = false;

  constructor(
    private router : Router,
    private authentication : AuthenticationService
    ) {

  }

  authenticate() {
    const formData = this.loginForm.value as LoginData;
    const username = formData.username;
    const password = formData.password;
    const user = this.authentication.loginUser(username,password);
    if(!user){
      this.hasUserFailedAuthentication = true;
      return;
    }
    sessionStorage.setItem('user',JSON.stringify(user))
    this.redirectByUrl('browser');
  }

  redirectByUrl(url : string){
    this.router.navigateByUrl(`${url}`);
  }

}
