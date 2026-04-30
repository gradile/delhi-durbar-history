import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part47Component } from './part47.component';

describe('Part47Component', () => {
  let component: Part47Component;
  let fixture: ComponentFixture<Part47Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part47Component]
    });
    fixture = TestBed.createComponent(Part47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
