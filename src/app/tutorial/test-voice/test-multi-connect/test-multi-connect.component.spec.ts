import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMultiConnectComponent } from './test-multi-connect.component';

describe('TestMultiConnectComponent', () => {
  let component: TestMultiConnectComponent;
  let fixture: ComponentFixture<TestMultiConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMultiConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMultiConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
