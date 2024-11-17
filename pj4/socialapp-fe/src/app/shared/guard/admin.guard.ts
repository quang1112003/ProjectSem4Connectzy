import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../../account/account.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const router = inject(Router);

  if(accountService.role()?.includes('ADMIN') || accountService.role()?.includes('MODERATOR')) {
    return true;
  } else {
    router.navigate(['list-friendships']);
    return false;
  }
};
