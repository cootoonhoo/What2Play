import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';

@Component({
  selector: 'app-personal-data-form',
  templateUrl: './personal-data-form.component.html',
  styleUrls: ['./personal-data-form.component.scss']
})
export class PersonalDataFormComponent {


  constructor(private formMannagerService : FormMannagerService) {

  }

  nextStep(){
    this.formMannagerService.emitChangeStep(2)
  }
}
