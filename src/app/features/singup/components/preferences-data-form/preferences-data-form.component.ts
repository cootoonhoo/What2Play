import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';

@Component({
  selector: 'app-preferences-data-form',
  templateUrl: './preferences-data-form.component.html',
  styleUrls: ['./preferences-data-form.component.scss']
})
export class PreferencesDataFormComponent {
  constructor(private formMannagerService : FormMannagerService) {

  }

  nextStep(){
    this.formMannagerService.emitChangeStep(3)
  }
}
