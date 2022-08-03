import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemquantityComponent } from './set-itemquantity.component';

describe('SetItemquantityComponent', () => {
  let component: SetItemquantityComponent;
  let fixture: ComponentFixture<SetItemquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemquantityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetItemquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
