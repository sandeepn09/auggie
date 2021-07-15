import { TestBed } from '@angular/core/testing';

import { BillGuard } from './bill.guard';

describe('BillGuard', () => {
  let guard: BillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
