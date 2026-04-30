import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProcession2Component } from './main-procession2.component';

describe('MainProcession2Component', () => {
  let component: MainProcession2Component;
  let fixture: ComponentFixture<MainProcession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProcession2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProcession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
