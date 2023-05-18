import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Game } from 'src/app/shared/model/game.model';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.scss']
})
export class CardGameComponent {
  thisGame! : Game;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Game) {
    this.thisGame = data;
  }

}
