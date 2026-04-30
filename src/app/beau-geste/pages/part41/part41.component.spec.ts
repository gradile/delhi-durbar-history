import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part41Component } from './part41.component';

describe('Part41Component', () => {
  let component: Part41Component;
  let fixture: ComponentFixture<Part41Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part41Component]
    });
    fixture = TestBed.createComponent(Part41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
