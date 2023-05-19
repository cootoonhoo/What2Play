import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from './pages/browser.component';
import { GameCarouselComponent } from './components/game-carousel/game-carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { CardGameComponent } from './components/card-game/card-game.component';
import { MatIconModule } from '@angular/material/icon';

const router : Routes = [
  {path:'', component: BrowserComponent}
]

@NgModule({
  declarations: [
    BrowserComponent,
    GameCarouselComponent,
    CardGameComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    SharedModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    RouterModule
  ]
})
export class BrowserModule { }
