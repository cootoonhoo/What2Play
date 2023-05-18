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
  selectedGameList : Array<Game> = [];

  constructor(
    private formManagerService : FormMannagerService,
    private gameAPIService : GameAPIService,
    ) {
    }

    ngAfterContentInit(){
      this.iniciateGameSelection();
    }

    iniciateGameSelection(){;
      this.gameList = this.populateGameSelection(this.genresList);
  }

  populateGameSelection(genres : Array<string>) : Array<Game>{
    const gameListResult = new Array<Game>();
    genres.forEach(genre => {
      this.gameAPIService.searchGamesByGenre(genre,3).then(
        (data) => {
          data.forEach( game =>{
            gameListResult.push(game);
          })
        }
      )
    });
    return gameListResult;
  }

  onSelectionClick(game : Game){
    if(this.selectedGameList.includes(game)){
      const pos = this.selectedGameList.indexOf(game);
      this.selectedGameList.splice(pos,1);
    }
    else {
      this.selectedGameList.push(game);
    }
  }

  nextStepDry(){
    this.formManagerService.emitGames(new Array<Game>());
    this.formManagerService.emitChangeStep(4);
  }

  nextStep(){
    this.formManagerService.emitGames(this.selectedGameList);
    this.formManagerService.emitChangeStep(4);
  }
}
