import { FormMannagerService } from './../services/form-mannager.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupStep = 1;

  constructor(private formMannagerService : FormMannagerService) {
    formMannagerService.ChangeStep$.subscribe( (stepNumber) =>{
      if(stepNumber == 4){
        window.alert('Deu certo');
      }
      else if (stepNumber > 4 || stepNumber <= 0) {
        this.signupStep = 1;
      }
      else
        this.signupStep = stepNumber;
    });

  }
}
