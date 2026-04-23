import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPhoneDisplay } from './customer-phone-display';

describe('CustomerPhoneDisplay', () => {
  let component: CustomerPhoneDisplay;
  let fixture: ComponentFixture<CustomerPhoneDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerPhoneDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerPhoneDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
