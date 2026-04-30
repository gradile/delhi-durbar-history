import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Part22Component } from './part22.component';

describe('Part22Component', () => {
  let component: Part22Component;
  let fixture: ComponentFixture<Part22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Part22Component]
    });
    fixture = TestBed.createComponent(Part22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
