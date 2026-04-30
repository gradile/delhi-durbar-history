import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part16Component } from './part16.component';

describe('Part16Component', () => {
  let component: Part16Component;
  let fixture: ComponentFixture<Part16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
