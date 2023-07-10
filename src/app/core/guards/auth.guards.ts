import {
  CanActivateChildFn,
  CanActivateFn,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn | CanActivateChildFn = () => {

  const user = inject(AuthService).getUser();

  if (!!!user) {
    return inject(Router).navigate(['/']);
  }

  return true;
}
