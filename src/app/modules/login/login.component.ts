import { Component, computed, effect, inject, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login/login.service';

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

  constructor() {}

  onLogin(): void {
    console.log(this.login());
    // this._router.navigate(['home']);
  }
}
