import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyDisplay } from './tally-display';

describe('TallyDisplay', () => {
  let component: TallyDisplay;
  let fixture: ComponentFixture<TallyDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TallyDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
