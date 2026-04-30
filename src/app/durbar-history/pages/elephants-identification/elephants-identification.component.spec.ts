import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElephantsIdentificationComponent } from './elephants-identification.component';

describe('ElephantsIdentificationComponent', () => {
  let component: ElephantsIdentificationComponent;
  let fixture: ComponentFixture<ElephantsIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElephantsIdentificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElephantsIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
