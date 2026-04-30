import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeauGesteSetsComponent } from './beau-geste-sets.component';

describe('BeauGesteSetsComponent', () => {
  let component: BeauGesteSetsComponent;
  let fixture: ComponentFixture<BeauGesteSetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeauGesteSetsComponent]
    });
    fixture = TestBed.createComponent(BeauGesteSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
