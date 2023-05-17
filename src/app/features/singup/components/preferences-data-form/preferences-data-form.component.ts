import { GameAPIService } from './../../../../shared/services/gameAPI.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';

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
      delete this.selectedGenres[pos];
    }
    else {
      this.selectedGenres.push(genre);
    }
    console.log(this.selectedGenres);
  }

  hasBeenSelected(genre : string){
    console.log(this.selectedGenres.includes(genre));
    return this.selectedGenres.includes(genre);
  }
}
