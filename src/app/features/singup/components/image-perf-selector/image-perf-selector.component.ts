import { FormMannagerService } from './../../services/form-mannager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-perf-selector',
  templateUrl: './image-perf-selector.component.html',
  styleUrls: ['./image-perf-selector.component.scss']
})
export class ImagePerfSelectorComponent {
  iconSelected = 1;
  constructor(private formMannagerService : FormMannagerService) {

  }

  clickSelection(num : number){
    this.iconSelected = num;
  }

  nextStep(){
    this.formMannagerService.emitPerfilImg(`../../../../../assets/Avatar/avatar${this.iconSelected}.png`)
    this.formMannagerService.emitChangeStep(5);
  }
}
