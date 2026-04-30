import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part24Component } from './part24.component';

describe('Part24Component', () => {
  let component: Part24Component;
  let fixture: ComponentFixture<Part24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part24Component]
    });
    fixture = TestBed.createComponent(Part24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
