import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import * as userEffects from './store/login.effects';
import { LoginStore } from './store/login.store';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    EffectsModule.forFeature([userEffects]),
  ],
  providers: [LoginStore],
})
export class LoginModule {}
