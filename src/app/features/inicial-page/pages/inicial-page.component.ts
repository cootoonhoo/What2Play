import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, debounceTime, fromEvent } from 'rxjs';
import { GameAPIService } from 'src/app/shared/services/gameAPI.service';

@Component({
  templateUrl: './inicial-page.component.html',
  styleUrls: ['./inicial-page.component.scss']
})
export class InicialPageComponent {
  gameImages!: string[];
  gameImagesShowing!: string[];
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;

  numImagesPerRow!: number;
  numOfRows = 2;


  constructor(
    private gameAPIService: GameAPIService,
    private router : Router,
    ) { }

  ngOnInit() {
    this.loadGameImages();
    this.gameImagesShowing = this.gameImages;
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$
    .pipe(debounceTime(100))
    .subscribe(() =>{
      this.updateNumImagesPerRow();
    })
    setInterval(() =>{
      this.updateNumImagesPerRow()
    },300)
  }

  updateNumImagesPerRow() {
    this.gameImagesShowing = this.gameImages;
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1200) {
      this.numImagesPerRow = 6;
    } else if (screenWidth >= 768) {
      this.numImagesPerRow = 4;
    } else {
      this.numImagesPerRow = 2;
    }
    this.gameImagesShowing =  this.gameImagesShowing.slice(0,this.numImagesPerRow * 3);
  }

  loadGameImages() {
    this.gameAPIService.getRandomGameBackgrounds()
      .then(images => {
        this.gameImages = images;
        this.gameImagesShowing = images;
      })
      .catch(error => {
        console.error('Erro ao obter as imagens do jogo:', error);
      });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  redirectUrl(url : string){
    this.router.navigateByUrl(`/${url}`)
  }
}
