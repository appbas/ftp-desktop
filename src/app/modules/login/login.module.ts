import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginEffects } from './store/login.effects';
import { featureKey, reducer } from './store';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/ui/input/input.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    EffectsModule.forFeature([LoginEffects]),
    StoreModule.forFeature(featureKey, reducer),
    ReactiveFormsModule,
    InputModule,
  ],
})
export class LoginModule {}
