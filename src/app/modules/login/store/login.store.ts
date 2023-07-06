import { Injectable, computed } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { UserData, UserType } from '../models/user.model';
import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginApiActions } from './login.actions';
import { exhaustMap, map } from 'rxjs';

type LoginState = {
  user: UserData;
  login: Pick<UserType, 'login' | 'password'> | undefined;
};

@Injectable()
export class LoginStore extends ComponentStore<LoginState> {
  readonly selectUser = this.selectSignal((store) => store?.user);
  readonly selectLogin = this.selectSignal((store) => store?.login);

  readonly setCategories = this.updater((state, userData: UserData) => {
    console.log(state);
    console.log(userData);
    return {
      ...state,
      userData,
    };
  });

  constructor() {
    super({
      user: {} as UserData,
      login: undefined,
    });
  }
}
