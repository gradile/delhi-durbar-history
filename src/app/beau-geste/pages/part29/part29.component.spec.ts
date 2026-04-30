import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part29Component } from './part29.component';

describe('Part29Component', () => {
  let component: Part29Component;
  let fixture: ComponentFixture<Part29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part29Component]
    });
    fixture = TestBed.createComponent(Part29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
