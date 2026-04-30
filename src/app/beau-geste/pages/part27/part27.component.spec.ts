import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part27Component } from './part27.component';

describe('Part27Component', () => {
  let component: Part27Component;
  let fixture: ComponentFixture<Part27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part27Component]
    });
    fixture = TestBed.createComponent(Part27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
