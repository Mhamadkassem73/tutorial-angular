import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpGridComponent } from './erp-grid.component';

describe('ErpGridComponent', () => {
  let component: ErpGridComponent;
  let fixture: ComponentFixture<ErpGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErpGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
