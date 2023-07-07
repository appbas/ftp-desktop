import { Component, Input, inject, ViewContainerRef } from '@angular/core';
import { Toast } from '../models/toast.model';

@Component({
  selector: 'app-item-toast',
  templateUrl: './item-toast.component.html',
  styleUrls: ['./item-toast.component.scss']
})
export class ItemToastComponent {

  private _toast: Toast | undefined;
  private timeoutId?: any;

  callback: Function | undefined;

  constructor() {

  }

  public get toast(): Toast | undefined {
    return this._toast;
  }

  @Input({ required: true })
  public set toast(value: Toast | undefined) {
    this._toast = value;
    this.timeoutId = setTimeout(() => {
      this.onRemove();
    }, this.toast?.timer);
  }

  onRemove() {
    if (this.callback) {
      clearTimeout(this.timeoutId);
      this.callback();
    }
  }

}
