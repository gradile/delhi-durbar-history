import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part25Component } from './part25.component';

describe('Part25Component', () => {
  let component: Part25Component;
  let fixture: ComponentFixture<Part25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part25Component]
    });
    fixture = TestBed.createComponent(Part25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
