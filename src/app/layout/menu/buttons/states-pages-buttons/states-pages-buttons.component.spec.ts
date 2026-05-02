import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesPagesButtonsComponent } from './states-pages-buttons.component';

describe('StatesPagesButtonsComponent', () => {
  let component: StatesPagesButtonsComponent;
  let fixture: ComponentFixture<StatesPagesButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatesPagesButtonsComponent]
    });
    fixture = TestBed.createComponent(StatesPagesButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
