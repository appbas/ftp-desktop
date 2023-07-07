import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { Login, UserData } from '../models/user.model';
import { LoginApiActions } from './login.actions';

@Injectable()
export class LoginEffects {

  constructor() {}

  readonly login$ = createEffect(
    (actions$ = inject(Actions), authService = inject(LoginService)) =>
      actions$.pipe(
        ofType(LoginApiActions.userLogin),
        switchMap(({login}) =>
          authService.login(login).pipe(
            map((userData) => {
              console.log(userData);
              return LoginApiActions.returnLogin({ userData });
            }),

          )
        )
      )
  );

}
