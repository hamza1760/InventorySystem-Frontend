import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceInventoryInWarehouseComponent } from './place-inventory-in-warehouse.component';

describe('PlaceInventoryInWarehouseComponent', () => {
  let component: PlaceInventoryInWarehouseComponent;
  let fixture: ComponentFixture<PlaceInventoryInWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceInventoryInWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceInventoryInWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
