import { Component, inject, Signal, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { LoginApiActions } from './store/login.actions';
import * as fromLogin from './store';
import { Login, UserData } from './models/user.model';
import {
  FormGroup,
  FormRecord,
  FormBuilder,
  Validators,
  ValidationErrors,
} from '@angular/forms';

export const ValidationType = {
  required: 'Campo obrigatório',
  minlength: 'Tamanho mínimo de {0} caracteres',
  maxlength: 'Tamanho máximo de {0} caracteres',
} as any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private readonly _router = inject(Router);
  private readonly _loginService = inject(LoginService);

  store$: Store = inject(Store);
  loginStore: Signal<UserData | undefined> = this.store$.selectSignal(
    fromLogin.selectUser
  );

  form: FormRecord = inject(FormBuilder).record({
    login: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(24)],
    ],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(24)],
    ],
  });

  loading = this.store$.selectSignal(fromLogin.selectLoginLoading);

  constructor() {}

  ngOnInit(): void {
    this.form.get('')?.errors;
  }

  onLogin(): void {
    if (this.form.valid) {
      this.store$?.dispatch(
        LoginApiActions.userLogin({
          login: this.form.value as Login,
        })
      );
    }
  }

  validation(validation: ValidationErrors | null | undefined): string[] | undefined {

    const errors = [];

    for (const key in validation) {
      if (Object.prototype.hasOwnProperty.call(validation, key)) {

        if (['maxlength', 'minlength'].includes(key)) {
          errors.push((ValidationType[key] as string).replace('{0}', validation[key].requiredLength));
        } else {
          errors.push(ValidationType[key]);
        }

      }
    }

    return errors;
  }
}
