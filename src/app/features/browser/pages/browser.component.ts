import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { Component } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';

@Component({
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss']
})
export class BrowserComponent {
  genresUser : Array<string> = []

  constructor(private authenticationService :AuthenticationService) {

  }
  ngOnInit(){
    const user = this.authenticationService.getCurrentUser() as User;
    this.genresUser = user.preferences.genre;
  }
}
