import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).isLoggedIn === false) {
    inject(Router).navigate(['/login']);
    return false
  } else {
    return true;
  }
};
