import { FormMannagerService } from './../../services/form-mannager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-perf-selector',
  templateUrl: './image-perf-selector.component.html',
  styleUrls: ['./image-perf-selector.component.scss']
})
export class ImagePerfSelectorComponent {

  constructor(private formMannagerService : FormMannagerService) {

  }

  nextStep(){
    this.formMannagerService.emitChangeStep(4)
  }
}
