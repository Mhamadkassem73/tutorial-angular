import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSelectOneComponent } from './test-select-one.component';

describe('TestSelectOneComponent', () => {
  let component: TestSelectOneComponent;
  let fixture: ComponentFixture<TestSelectOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSelectOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
