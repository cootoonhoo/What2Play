import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';

@Component({
  selector: 'app-preferences-data-form',
  templateUrl: './preferences-data-form.component.html',
  styleUrls: ['./preferences-data-form.component.scss']
})
export class PreferencesDataFormComponent {
  personalForm = new FormGroup({
    username : new FormControl<string | null>('',Validators.required),
    password : new FormControl<string | null>('',Validators.required),
    rePassword : new FormControl<string | null>('',Validators.required),
    firstName : new FormControl<string | null>('',Validators.required),
    lastName : new FormControl<string | null>('',Validators.required)
  });
  constructor(private formMannagerService : FormMannagerService) {

  }

  nextStep(){
    this.formMannagerService.emitChangeStep(3);
  }
}
