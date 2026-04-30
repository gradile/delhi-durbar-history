import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part40Component } from './part40.component';

describe('Part40Component', () => {
  let component: Part40Component;
  let fixture: ComponentFixture<Part40Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part40Component]
    });
    fixture = TestBed.createComponent(Part40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
