import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFiltersComponent } from './display-filters.component';

describe('DisplayFiltersComponent', () => {
  let component: DisplayFiltersComponent;
  let fixture: ComponentFixture<DisplayFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
