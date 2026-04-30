import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part28Component } from './part28.component';

describe('Part28Component', () => {
  let component: Part28Component;
  let fixture: ComponentFixture<Part28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part28Component]
    });
    fixture = TestBed.createComponent(Part28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
