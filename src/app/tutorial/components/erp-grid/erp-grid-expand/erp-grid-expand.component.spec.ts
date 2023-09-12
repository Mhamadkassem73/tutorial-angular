import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpGridExpandComponent } from './erp-grid-expand.component';

describe('ErpGridExpandComponent', () => {
  let component: ErpGridExpandComponent;
  let fixture: ComponentFixture<ErpGridExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpGridExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpGridExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
