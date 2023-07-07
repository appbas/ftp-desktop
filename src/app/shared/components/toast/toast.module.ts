import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { ItemToastComponent } from './item-toast/item-toast.component';



@NgModule({
  declarations: [
    ToastComponent,
    ItemToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ToastComponent]
})
export class ToastModule { }
