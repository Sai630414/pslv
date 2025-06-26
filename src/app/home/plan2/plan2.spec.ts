import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2 } from './plan2';

describe('Plan2', () => {
  let component: Plan2;
  let fixture: ComponentFixture<Plan2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plan2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plan2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
