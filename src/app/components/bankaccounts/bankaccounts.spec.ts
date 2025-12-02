import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bankaccounts } from './bankaccounts';

describe('Bankaccounts', () => {
  let component: Bankaccounts;
  let fixture: ComponentFixture<Bankaccounts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bankaccounts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bankaccounts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
