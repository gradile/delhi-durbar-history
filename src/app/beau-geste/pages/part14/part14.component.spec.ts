import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part14Component } from './part14.component';

describe('Part14Component', () => {
  let component: Part14Component;
  let fixture: ComponentFixture<Part14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Part14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Part14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
