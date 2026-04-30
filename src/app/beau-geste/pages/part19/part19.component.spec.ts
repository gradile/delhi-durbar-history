import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part19Component } from './part19.component';

describe('Part19Component', () => {
  let component: Part19Component;
  let fixture: ComponentFixture<Part19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part19Component]
    });
    fixture = TestBed.createComponent(Part19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
