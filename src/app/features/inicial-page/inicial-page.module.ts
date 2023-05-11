import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialPageComponent } from './pages/inicial-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    InicialPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    InicialPageComponent
  ]
})
export class InicialPageModule { }
