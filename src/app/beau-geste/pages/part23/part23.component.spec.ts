import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part23Component } from './part23.component';

describe('Part23Component', () => {
  let component: Part23Component;
  let fixture: ComponentFixture<Part23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part23Component]
    });
    fixture = TestBed.createComponent(Part23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
