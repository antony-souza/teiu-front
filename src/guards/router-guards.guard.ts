import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const RouterGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/']);
    return false;
  }

  return true;
};