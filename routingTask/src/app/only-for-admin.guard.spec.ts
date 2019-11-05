import { TestBed, async, inject } from '@angular/core/testing';

import { OnlyForAdminGuard } from './only-for-admin.guard';

describe('OnlyForAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OnlyForAdminGuard]
    });
  });

  it('should ...', inject([OnlyForAdminGuard], (guard: OnlyForAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
