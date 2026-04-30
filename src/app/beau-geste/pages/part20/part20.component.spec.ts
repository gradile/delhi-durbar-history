import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part20Component } from './part20.component';

describe('Part20Component', () => {
  let component: Part20Component;
  let fixture: ComponentFixture<Part20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part20Component]
    });
    fixture = TestBed.createComponent(Part20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
