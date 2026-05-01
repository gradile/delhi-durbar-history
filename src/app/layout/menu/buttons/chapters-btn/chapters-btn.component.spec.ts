import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersBtnComponent } from './chapters-btn.component';

describe('ChaptersBtnComponent', () => {
  let component: ChaptersBtnComponent;
  let fixture: ComponentFixture<ChaptersBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaptersBtnComponent]
    });
    fixture = TestBed.createComponent(ChaptersBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
