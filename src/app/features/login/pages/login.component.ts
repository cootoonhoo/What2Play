import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../models/loginData.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  })
  hasUserFailedAuthentication : boolean = false;

  constructor(private router : Router) {

  }

  authenticate() {
    const formData = this.loginForm.value as LoginData;
    const username = formData.username;
    const password = formData.password;
    window.alert("Aplicativo em desenvolvimento");
    this.hasUserFailedAuthentication = true;
  }

  redirectByUrl(url : string){
    this.router.navigateByUrl(`${url}`);
  }

}
