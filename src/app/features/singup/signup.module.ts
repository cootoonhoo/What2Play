import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './pages/signup.component';
import { ImagePerfSelectorComponent } from './components/image-perf-selector/image-perf-selector.component';
import { PersonalDataFormComponent } from './components/personal-data-form/personal-data-form.component';
import { PreferencesDataFormComponent } from './components/preferences-data-form/preferences-data-form.component';
import { MatIconModule } from '@angular/material/icon';
import { GameSelectionFormComponent } from './components/game-selection-form/game-selection-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent,
    ImagePerfSelectorComponent,
    PersonalDataFormComponent,
    PreferencesDataFormComponent,
    GameSelectionFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports : [
    SignupComponent
  ]
})
export class SingupModule { }
