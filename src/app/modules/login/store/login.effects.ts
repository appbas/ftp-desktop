import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginApiActions } from './login.actions';
import { exhaustMap, map, switchMap, tap } from 'rxjs';
import { LoginStore } from './login.store';

export const login = createEffect(
  (actions$ = inject(Actions), authService = inject(AuthService)) => {
    return actions$.pipe(
      ofType(LoginApiActions.getLogin),
      switchMap(() =>
        authService.getLogin().pipe(
          tap((userData) => {
            console.log(userData);
            inject(LoginStore).setCategories(userData);
          })
        )
      )
    );
  },
  { functional: true, dispatch: false }
);
