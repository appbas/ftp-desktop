import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';



@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class TemplateModule { }
