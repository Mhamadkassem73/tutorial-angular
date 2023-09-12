import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputYearsComponent } from './input-years.component';

describe('InputYearsComponent', () => {
  let component: InputYearsComponent;
  let fixture: ComponentFixture<InputYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputYearsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
