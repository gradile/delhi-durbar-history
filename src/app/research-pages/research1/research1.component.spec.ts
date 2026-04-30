import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Research1Component } from './research1.component';

describe('Research1Component', () => {
  let component: Research1Component;
  let fixture: ComponentFixture<Research1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Research1Component]
    });
    fixture = TestBed.createComponent(Research1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
