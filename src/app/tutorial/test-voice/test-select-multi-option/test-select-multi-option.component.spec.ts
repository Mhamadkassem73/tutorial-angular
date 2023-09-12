import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSelectMultiOptionComponent } from './test-select-multi-option.component';

describe('TestSelectMultiOptionComponent', () => {
  let component: TestSelectMultiOptionComponent;
  let fixture: ComponentFixture<TestSelectMultiOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSelectMultiOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSelectMultiOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
