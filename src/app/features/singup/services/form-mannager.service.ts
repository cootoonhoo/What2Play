import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Game } from 'src/app/shared/model/game.model';
import { PersonalData } from '../models/personalData.model';

@Injectable({
  providedIn: 'root'
})
export class FormMannagerService {

  constructor() { }
  private StepMannager = new Subject<number>();
  private personalDataEmiter = new Subject<PersonalData>();
  private genreSelectionEmiter = new Subject<Array<string>>();
  private gamesSelectionEmiter = new Subject<Array<Game>>();
  private prefilImageSelector = new Subject<string>();

  public ChangeStep$ = this.StepMannager.asObservable();
  public PersonalData$ = this.personalDataEmiter.asObservable();
  public Genres$ = this.genreSelectionEmiter.asObservable();
  public Games$ = this.gamesSelectionEmiter.asObservable();
  public PerfilImg$ = this.prefilImageSelector.asObservable();

  public emitChangeStep(step : number){
    this.StepMannager.next(step);
  }
  public emitPersonalData(step : PersonalData){
    this.personalDataEmiter.next(step);
  }
  public emitGenres(step : Array<string>){
    this.genreSelectionEmiter.next(step);
  }
  public emitGames(step : Array<Game>){
    this.gamesSelectionEmiter.next(step);
  }
  public emitPerfilImg(step : string){
    this.prefilImageSelector.next(step);
  }
}
