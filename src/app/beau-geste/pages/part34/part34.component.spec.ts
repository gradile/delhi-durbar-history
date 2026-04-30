import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part34Component } from './part34.component';

describe('Part34Component', () => {
  let component: Part34Component;
  let fixture: ComponentFixture<Part34Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part34Component]
    });
    fixture = TestBed.createComponent(Part34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
