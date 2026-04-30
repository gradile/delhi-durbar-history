import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part49Component } from './part49.component';

describe('Part49Component', () => {
  let component: Part49Component;
  let fixture: ComponentFixture<Part49Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part49Component]
    });
    fixture = TestBed.createComponent(Part49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
