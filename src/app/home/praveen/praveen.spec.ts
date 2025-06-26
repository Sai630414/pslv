import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Praveen } from './praveen';

describe('Praveen', () => {
  let component: Praveen;
  let fixture: ComponentFixture<Praveen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Praveen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Praveen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
