import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part46Component } from './part46.component';

describe('Part46Component', () => {
  let component: Part46Component;
  let fixture: ComponentFixture<Part46Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part46Component]
    });
    fixture = TestBed.createComponent(Part46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
