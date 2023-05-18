import { PersonalData } from './../models/personalData.model';
import { Router } from '@angular/router';
import { FormMannagerService } from './../services/form-mannager.service';
import { Component } from '@angular/core';
import { Game } from 'src/app/shared/model/game.model';
import { User } from 'src/app/shared/model/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupStep = 1;
  personalDataUser! : PersonalData;
  genresUser! : Array<string>;
  gamesUser! : Array<Game>;
  perfilImgUser! : string;

  constructor(
    private formMannagerService : FormMannagerService,
    private router : Router,
    private authentication : AuthenticationService
    ) {
    formMannagerService.ChangeStep$.subscribe( (stepNumber) =>{
      if(stepNumber == 5){
        this.registerUser();
      }
      else if (stepNumber > 5 || stepNumber <= 0) {
        this.signupStep = 1;
      }
      else
        this.signupStep = stepNumber;
    });

    formMannagerService.PersonalData$.subscribe( (personalData) => {
      this.personalDataUser = personalData;
    });

    formMannagerService.Genres$.subscribe( (genresData) => {
      this.genresUser = genresData;
    });

    formMannagerService.Games$.subscribe( (gamesData) => {
      this.gamesUser = gamesData;
    });

    formMannagerService.PerfilImg$.subscribe( (imgLink) => {
      this.perfilImgUser = imgLink;
    });
  }

  redirectByUrl(url : string){
    this.router.navigateByUrl(`${url}`);
  }

  registerUser(){
    const NewUser : User = {
      firstName : this.personalDataUser.firstName,
      lastName : this.personalDataUser.lastName,
      email : this.personalDataUser.email,
      username : this.personalDataUser.user,
      password : this.personalDataUser.password,
      perfilIcon : this.perfilImgUser,
      preferences : {
        games : this.gamesUser,
        genre : this.genresUser
      }
    }
    this.authentication.createUser(NewUser);
    this.redirectByUrl('login')
  }
}
