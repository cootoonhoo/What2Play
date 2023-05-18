import { GameAPIService } from './../../../../shared/services/gameAPI.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';
import { Game } from 'src/app/shared/model/game.model';

@Component({
  selector: 'app-preferences-data-form',
  templateUrl: './preferences-data-form.component.html',
  styleUrls: ['./preferences-data-form.component.scss']
})
export class PreferencesDataFormComponent{
  personalForm = new FormGroup({
    genresSelected : new FormControl<string[]>([], Validators.required),
    gamesSelected : new FormControl<string[]>([], Validators.required),
  });

  genres! : string[];
  selectedGenres : string[] = [];
  genreSelection : boolean = true;
  gameList : Array<Game> = []

  constructor(
    private formMannagerService : FormMannagerService,
    private gameAPIService : GameAPIService) {

  }

  ngOnInit() {
    this.gameAPIService.getGenres().then( (data) => {
      this.genres = data;
    });

    }

  nextStep(){
    this.formMannagerService.emitChangeStep(3);
  }

  onClickGenre(genre: string){
    if(this.selectedGenres.includes(genre)){
      const pos = this.selectedGenres.indexOf(genre);
      this.selectedGenres.splice(pos,1);
    }
    else {
      this.selectedGenres.push(genre);
    }
    if(this.selectedGenres.length >= 6){
      this.selectedGenres = this.selectedGenres.splice(1,6)
    }
    console.log(this.selectedGenres);
  }
}
