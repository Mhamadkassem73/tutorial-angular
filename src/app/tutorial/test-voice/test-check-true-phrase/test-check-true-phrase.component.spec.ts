import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCheckTruePhraseComponent } from './test-check-true-phrase.component';

describe('TestCheckTruePhraseComponent', () => {
  let component: TestCheckTruePhraseComponent;
  let fixture: ComponentFixture<TestCheckTruePhraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCheckTruePhraseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckTruePhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
