import { Game } from 'src/app/shared/model/game.model';
import { GameAPIService } from './../../../../shared/services/gameAPI.service';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardGameComponent } from '../card-game/card-game.component';

@Component({
  selector: 'app-game-carousel',
  templateUrl: './game-carousel.component.html',
  styleUrls: ['./game-carousel.component.scss']
})
export class GameCarouselComponent {
  @Input() gamesGenre! : string;
  gamesList : Array<Game> = [];
  gamesImg : Array<object> = []

  constructor(
    private gameAPIService : GameAPIService,
    public dialog : MatDialog
    ) {
  }

  ngAfterContentInit(){
    this.gameAPIService.searchGamesByGenre(this.gamesGenre,10).then(
      (data) => {
        data.forEach( game =>{
          this.gamesList.push(game);
          this.gamesImg.push(new Object({
            image : game.posterImg,
            thumbImage : game.posterImg,
            alt : game.title,
            title : game.title,
          }))
        })
      }
    );
  }

  openCard(game : Game){
    this.dialog.open(CardGameComponent, {
      data: game,
    });
  }
}
