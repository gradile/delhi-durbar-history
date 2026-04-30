import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part32Component } from './part32.component';

describe('Part32Component', () => {
  let component: Part32Component;
  let fixture: ComponentFixture<Part32Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part32Component]
    });
    fixture = TestBed.createComponent(Part32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
