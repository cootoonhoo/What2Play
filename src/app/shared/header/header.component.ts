import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  userLogged = false;
  user! : User;

  constructor(private router : Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit(){
    this.user = this.authenticationService.getCurrentUser();
    if(this.user){
      this.userLogged = true;
    }
  }

  logout(){
    this.authenticationService.logout();
    this.redirectByUrl('')
  }

  redirectByUrl(url : string){
    this.router.navigateByUrl(`${url}`)
  }
}
