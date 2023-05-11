import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormMannagerService {

  constructor() { }
  private StepMannager = new Subject<number>();
  public ChangeStep$ = this.StepMannager.asObservable();
  public emitChangeStep(step : number){
    this.StepMannager.next(step);
  }
}
