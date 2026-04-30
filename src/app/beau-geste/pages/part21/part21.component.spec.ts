import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part21Component } from './part21.component';

describe('Part21Component', () => {
  let component: Part21Component;
  let fixture: ComponentFixture<Part21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part21Component]
    });
    fixture = TestBed.createComponent(Part21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
