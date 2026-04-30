import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part31Component } from './part31.component';

describe('Part31Component', () => {
  let component: Part31Component;
  let fixture: ComponentFixture<Part31Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part31Component]
    });
    fixture = TestBed.createComponent(Part31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
