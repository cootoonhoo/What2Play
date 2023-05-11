import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesDataFormComponent } from './preferences-data-form.component';

describe('PreferencesDataFormComponent', () => {
  let component: PreferencesDataFormComponent;
  let fixture: ComponentFixture<PreferencesDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencesDataFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
