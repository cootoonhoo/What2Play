import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserComponent } from './pages/browser/browser.component';

const router : Routes = [
  {path:'', component: BrowserComponent}
]

@NgModule({
  declarations: [
    BrowserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class BrowserModule { }
