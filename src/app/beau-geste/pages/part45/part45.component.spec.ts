import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part45Component } from './part45.component';

describe('Part45Component', () => {
  let component: Part45Component;
  let fixture: ComponentFixture<Part45Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part45Component]
    });
    fixture = TestBed.createComponent(Part45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
