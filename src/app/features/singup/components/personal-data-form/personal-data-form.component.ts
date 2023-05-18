import { PersonalData } from './../../models/personalData.model';
import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent {
  samePassword = false;
  signUpForm: FormGroup = new FormGroup({
    user : new FormControl('',Validators.required),
    password : new FormControl('', [Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',[Validators.required])
  });

  constructor(private formMannagerService : FormMannagerService) {
  }

  nextStep(){
    const PersonalData = this.signUpForm.value as PersonalData;
    console.log(PersonalData)
    if(PersonalData.password != PersonalData.confirmPassword){
      this.samePassword = true;
      return;
    }
    this.formMannagerService.emitPersonalData(PersonalData);
    this.formMannagerService.emitChangeStep(2);
  }
}
