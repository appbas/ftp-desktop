import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Login, UserData } from '../models/user.model';
import { LoginApiActions } from './login.actions';

@Injectable()
export class LoginEffects {

  constructor() { }

  readonly login$ = createEffect(
    (actions$ = inject(Actions), authService = inject(LoginService), toasService = inject(ToastService)) =>
      actions$.pipe(
        ofType(LoginApiActions.userLogin),
        switchMap(({ login }) =>
          authService.login(login).pipe(
            map((userData) => {
              console.log(userData);
              return LoginApiActions.returnLogin({ userData });
            }),
            catchError((e: HttpErrorResponse) => {
              toasService.error(e.error.message);
              return of(LoginApiActions.loginFailure());
            })
          )
        )
      )
  );

  readonly saveLoginStorage$ = createEffect(
    (actions$ = inject(Actions), authService = inject(AuthService)) =>
      actions$.pipe(
        ofType(LoginApiActions.returnLogin),
        map(({ userData }) => {
          console.log('save storage', userData);

          authService.saveStorage(userData);

          return LoginApiActions.redirectPageAfterLogin();
        }
        )
      ),
  );

  readonly redirectPageAfterLoginf$ = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) =>
      actions$.pipe(
        ofType(LoginApiActions.redirectPageAfterLogin),
        tap(() =>
          router.navigate(['/home'])
        )
      ),
    { dispatch: false }
  );

}
