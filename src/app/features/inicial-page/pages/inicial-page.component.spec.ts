import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialPageComponent as InicialPageComponent } from './inicial-page.component';

describe('IncialPageComponent', () => {
  let component: InicialPageComponent;
  let fixture: ComponentFixture<InicialPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicialPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicialPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
