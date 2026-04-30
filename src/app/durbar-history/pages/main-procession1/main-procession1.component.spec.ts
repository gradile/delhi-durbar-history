import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcession1Component } from './main-procession1.component';

describe('MainProcession1Component', () => {
  let component: MainProcession1Component;
  let fixture: ComponentFixture<MainProcession1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProcession1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProcession1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
