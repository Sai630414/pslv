import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthMetrics } from './health-metrics';

describe('HealthMetrics', () => {
  let component: HealthMetrics;
  let fixture: ComponentFixture<HealthMetrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthMetrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthMetrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
