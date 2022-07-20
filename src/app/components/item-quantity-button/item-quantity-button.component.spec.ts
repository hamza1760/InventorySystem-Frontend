import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemQuantityButtonComponent } from './item-quantity-button.component';

describe('ItemQuantityButtonComponent', () => {
  let component: ItemQuantityButtonComponent;
  let fixture: ComponentFixture<ItemQuantityButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemQuantityButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemQuantityButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
