import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSticker } from './price-sticker';

describe('PriceSticker', () => {
  let component: PriceSticker;
  let fixture: ComponentFixture<PriceSticker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceSticker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceSticker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
