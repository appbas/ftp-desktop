import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Login, UserData } from '../models/user.model';

export const LoginApiActions = createActionGroup({
  source: 'Login Api',
  events: {
    userLogin: props<{ login: Login }>(),
    returnLogin: props<{ userData: UserData }>(),
    redirectPageAfterLogin: emptyProps(),
    loginFailure: emptyProps(),
  },
});
