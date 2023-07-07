export type ToastType = 'info' | 'success' | 'warning' | 'danger';

export type ToastTimer = 2000 | 3000 | 4000 | 5000;

export interface Toast {

  type: ToastType;
  message: string;
  timer: ToastTimer;

}
