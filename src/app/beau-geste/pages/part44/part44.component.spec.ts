import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part44Component } from './part44.component';

describe('Part44Component', () => {
  let component: Part44Component;
  let fixture: ComponentFixture<Part44Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part44Component]
    });
    fixture = TestBed.createComponent(Part44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
