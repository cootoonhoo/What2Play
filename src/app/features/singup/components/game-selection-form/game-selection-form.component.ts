import { GameAPIService } from 'src/app/shared/services/gameAPI.service';
import { Component, Input } from '@angular/core';
import { FormMannagerService } from '../../services/form-mannager.service';
import { Game } from 'src/app/shared/model/game.model';

@Component({
  selector: 'app-game-selection-form',
  templateUrl: './game-selection-form.component.html',
  styleUrls: ['./game-selection-form.component.scss']
})
export class GameSelectionFormComponent {

  @Input() genresList : Array<string> = [];
  gameList : Array<Game> = [];

  constructor(
    private formManagerService : FormMannagerService,
    private gameAPIService : GameAPIService,
    ) {
    }

    ngAfterViewChecked(){
      this.iniciateGameSelection();
  }

  iniciateGameSelection(){;
    this.gameList = this.populateGameSelection(this.genresList);
  }

  populateGameSelection(genres : Array<string>) : Array<Game>{
    const gameListResult = new Array<Game>();
    console.log(genres);
    genres.forEach(genre => {
      this.gameAPIService.searchGamesByGenre(genre,3).then(
        (data) => {
          data.forEach( game =>{
            gameListResult.push(game);
          })
        }
      )
    });
    console.log(gameListResult);
    return gameListResult;
  }
}
