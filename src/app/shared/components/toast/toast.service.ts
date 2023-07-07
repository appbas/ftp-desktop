import { Injectable, Signal, signal, computed, WritableSignal } from '@angular/core';
import { Toast } from './models/toast.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  #toast: WritableSignal<Toast> = signal({} as Toast);

  constructor() { }

  success(message: string): void {
    this.#toast.set(({
      type: 'success',
      timer: 5000,
      message,
    } as Toast))
  }

  get toast() {

    return this.#toast;
  }
}
