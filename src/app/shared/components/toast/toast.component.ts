import { Component, ComponentRef, effect, inject, Signal, ViewChild, ViewContainerRef } from '@angular/core';
import { ItemToastComponent } from './item-toast/item-toast.component';
import { Toast } from './models/toast.model';
import { ToastService } from './toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  @ViewChild('dynamicComponent', { static: true, read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;


  private toastService: ToastService;
  private toast!: Signal<Toast>;

  constructor() {
    this.toastService = inject(ToastService);
    this.toast = this.toastService.toast;
    effect(() => this.addToast(this.toast()) )
  }

  addToast(toast: Toast): void {
    const componentRef = this.dynamicComponent.createComponent(ItemToastComponent);
    componentRef.instance.toast =  toast;
    componentRef.instance.callback = () => this.destroy(componentRef);
  }

  private destroy(componentRef: ComponentRef<any>): void {
    componentRef.destroy();
  }

}
