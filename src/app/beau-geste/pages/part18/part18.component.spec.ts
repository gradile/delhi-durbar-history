import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part18Component } from './part18.component';

describe('Part18Component', () => {
  let component: Part18Component;
  let fixture: ComponentFixture<Part18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part18Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
