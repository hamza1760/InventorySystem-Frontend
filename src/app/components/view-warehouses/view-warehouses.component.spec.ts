import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWarehousesComponent } from './view-warehouses.component';

describe('ViewWarehousesComponent', () => {
  let component: ViewWarehousesComponent;
  let fixture: ComponentFixture<ViewWarehousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWarehousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
