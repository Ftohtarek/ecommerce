import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccussComponent } from './order-succuss.component';

describe('OrderSuccussComponent', () => {
  let component: OrderSuccussComponent;
  let fixture: ComponentFixture<OrderSuccussComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSuccussComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSuccussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
