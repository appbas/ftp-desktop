import {
  Component,
  computed,
  effect,
  inject,
  Injector,
  Signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { LoginStore } from './store/login.store';
import { UserData, UserType } from './models/user.model';
import { LoginApiActions } from './store/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  // login = this._loginService.login('178-01142', '@@Bruno9238.');
  login = toSignal(this._loginService.login('178-01142', '@@Bruno9238.'));
  store$: Store = inject(Store);
  loginStore: Signal<UserData> = this.store$.selectSignal(
    inject(LoginStore).selectUser
  );

  constructor() {
    this.store$.dispatch(LoginApiActions.getLogin());
  }

  onLogin(): void {
    // console.log(this.login());
    // this._router.navigate(['home']);
  }
}
