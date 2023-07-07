import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'src/app/shared/components/toast/toast.module';
import { TemplateComponent } from './template.component';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ToastModule,
  ]
})
export class TemplateModule { }
