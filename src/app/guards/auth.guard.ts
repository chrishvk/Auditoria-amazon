import { CanActivateFn, Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticate.service';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticateService);
  const isAuthenticated = authService.isAuthenticated();

  if (isAuthenticated) {
    return true;
  } else {
    router.navigate(['/iniciar']);
    return false;
  }
};
