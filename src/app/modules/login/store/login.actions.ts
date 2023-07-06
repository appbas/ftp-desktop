import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { UserData } from '../models/user.model';

export const LoginApiActions = createActionGroup({
  source: 'Login Api',
  events: {
    getLogin: emptyProps(),
    returnLogin: props<{ userData: UserData }>(),
  },
});
