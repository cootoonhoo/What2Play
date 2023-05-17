import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';



@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports : [
    AboutUsComponent
  ]
})
export class AboutUsModule { }
