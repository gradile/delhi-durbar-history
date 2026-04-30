import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part30Component } from './part30.component';

describe('Part30Component', () => {
  let component: Part30Component;
  let fixture: ComponentFixture<Part30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part30Component]
    });
    fixture = TestBed.createComponent(Part30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
