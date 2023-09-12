import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestVoiceComponent } from './test-voice.component';

describe('TestVoiceComponent', () => {
  let component: TestVoiceComponent;
  let fixture: ComponentFixture<TestVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
