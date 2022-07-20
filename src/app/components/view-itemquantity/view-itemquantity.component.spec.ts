import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemquantityComponent } from './view-itemquantity.component';

describe('ViewItemquantityComponent', () => {
  let component: ViewItemquantityComponent;
  let fixture: ComponentFixture<ViewItemquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewItemquantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewItemquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
