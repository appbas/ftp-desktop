import { Component, inject, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  private readonly _router = inject(Router);

  onLogin(): void {
    this._router.navigate(['']);
  }
}
