import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part50Component } from './part50.component';

describe('Part50Component', () => {
  let component: Part50Component;
  let fixture: ComponentFixture<Part50Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part50Component]
    });
    fixture = TestBed.createComponent(Part50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
