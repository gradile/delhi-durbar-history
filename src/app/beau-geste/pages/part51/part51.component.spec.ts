import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part51Component } from './part51.component';

describe('Part51Component', () => {
  let component: Part51Component;
  let fixture: ComponentFixture<Part51Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part51Component]
    });
    fixture = TestBed.createComponent(Part51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
