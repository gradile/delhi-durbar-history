import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetainersReviewComponent } from './retainers-review.component';

describe('RetainersReviewComponent', () => {
  let component: RetainersReviewComponent;
  let fixture: ComponentFixture<RetainersReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetainersReviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetainersReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
