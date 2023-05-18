import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectionFormComponent } from './game-selection-form.component';

describe('GameSelectionFormComponent', () => {
  let component: GameSelectionFormComponent;
  let fixture: ComponentFixture<GameSelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
