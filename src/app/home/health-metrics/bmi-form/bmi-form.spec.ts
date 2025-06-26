import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiForm } from './bmi-form';

describe('BmiForm', () => {
  let component: BmiForm;
  let fixture: ComponentFixture<BmiForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmiForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
