import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlwarComponent } from './alwar.component';

describe('AlwarComponent', () => {
  let component: AlwarComponent;
  let fixture: ComponentFixture<AlwarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlwarComponent]
    });
    fixture = TestBed.createComponent(AlwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
