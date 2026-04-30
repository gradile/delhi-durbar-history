import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part26Component } from './part26.component';

describe('Part26Component', () => {
  let component: Part26Component;
  let fixture: ComponentFixture<Part26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part26Component]
    });
    fixture = TestBed.createComponent(Part26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
