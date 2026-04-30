import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauGesteButtonsComponent } from './beau-geste-buttons.component';

describe('BeauGesteButtonsComponent', () => {
  let component: BeauGesteButtonsComponent;
  let fixture: ComponentFixture<BeauGesteButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeauGesteButtonsComponent]
    });
    fixture = TestBed.createComponent(BeauGesteButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
