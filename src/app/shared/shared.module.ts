import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RatingPipe } from './pipes/rating.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    RatingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    RatingPipe
  ]
})
export class SharedModule { }
