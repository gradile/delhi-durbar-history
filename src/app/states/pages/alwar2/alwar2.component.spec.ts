import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alwar2Component } from './alwar2.component';

describe('Alwar2Component', () => {
  let component: Alwar2Component;
  let fixture: ComponentFixture<Alwar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Alwar2Component]
    });
    fixture = TestBed.createComponent(Alwar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
