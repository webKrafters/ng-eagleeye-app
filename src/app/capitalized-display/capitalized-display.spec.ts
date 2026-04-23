import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalizedDisplay } from './capitalized-display';

describe('CapitalizedDisplay', () => {
  let component: CapitalizedDisplay;
  let fixture: ComponentFixture<CapitalizedDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapitalizedDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalizedDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
