import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhrForm } from './whr-form';

describe('WhrForm', () => {
  let component: WhrForm;
  let fixture: ComponentFixture<WhrForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhrForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhrForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
