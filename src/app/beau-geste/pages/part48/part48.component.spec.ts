import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part48Component } from './part48.component';

describe('Part48Component', () => {
  let component: Part48Component;
  let fixture: ComponentFixture<Part48Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part48Component]
    });
    fixture = TestBed.createComponent(Part48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
