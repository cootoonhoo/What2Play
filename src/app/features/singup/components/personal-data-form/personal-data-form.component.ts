import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent {
  perosnalData = new FormGroup({
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
    this.formMannagerService.emitChangeStep(2)
  }
}
