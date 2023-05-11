import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePerfSelectorComponent } from './image-perf-selector.component';

describe('ImagePerfSelectorComponent', () => {
  let component: ImagePerfSelectorComponent;
  let fixture: ComponentFixture<ImagePerfSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePerfSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePerfSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
