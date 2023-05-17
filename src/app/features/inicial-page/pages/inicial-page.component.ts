import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject, Subscription, debounceTime, fromEvent } from 'rxjs';
import { GameAPIService } from 'src/app/shared/services/gameAPI.service';
import { UrlBackgroundImgsService } from 'src/app/shared/services/url-background-imgs.service';

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
    private router : Router,
    private urlImgs : UrlBackgroundImgsService
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
    if(screenWidth > 2435){
      this.numImagesPerRow = 11;
    } else if(screenWidth > 2220){
      this.numImagesPerRow = 10;
    } else if(screenWidth > 2000){
      this.numImagesPerRow = 9;
    } else if(screenWidth > 1790){
      this.numImagesPerRow = 8;
    } else if(screenWidth > 1600){
      this.numImagesPerRow = 7;
    } else if(screenWidth > 1370){
      this.numImagesPerRow = 6;
    } else if(screenWidth > 1100){
      this.numImagesPerRow = 5;
    } else if (screenWidth >= 900) {
      this.numImagesPerRow = 4;
    } else if (screenWidth >= 650) {
      this.numImagesPerRow = 3;
    } else {
      this.numImagesPerRow = 2 * 3;
    }
    this.gameImagesShowing =  this.gameImagesShowing.slice(0,this.numImagesPerRow * 3);
  }

  loadGameImages() {
    const images = this.urlImgs.getImgsUrl();
    this.gameImages = images;
    this.gameImagesShowing = images;
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  redirectUrl(url : string){
    this.router.navigateByUrl(`/${url}`)
  }
}
