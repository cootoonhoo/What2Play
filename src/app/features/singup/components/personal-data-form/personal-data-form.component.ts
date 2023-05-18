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
  personalDataForm = new FormGroup({
    user : new FormControl<string>('',Validators.required),
    password : new FormControl<string>('',[Validators.required,Validators.minLength(8)]),
    confirmPassword : new FormControl<string>('',[Validators.required,Validators.minLength(8)]),
    email : new FormControl<string>('',[Validators.required,Validators.email]),
    firstName : new FormControl<string>('',Validators.required),
    lastName : new FormControl<string>('',Validators.required),
  });

  constructor(private formMannagerService : FormMannagerService) {

  }

  nextStep(){
    const PersonalData = this.personalDataForm.value as PersonalData;
    this.formMannagerService.emitPersonalData(PersonalData);
    this.formMannagerService.emitChangeStep(2);
  }
}
