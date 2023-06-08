import { Component, effect, signal } from '@angular/core';
const electron = (<any>window).require('electron').ipc;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ftp-desktop';

  teste = signal('');

  constructor() {
    effect(this.loadFiles);
    (<any>window).ipcRenderer.on('load-files', (event: any) => {
      console.log('TESTE');
      console.log(event);
    });
  }

  loadFiles(): void {
    console.log('iniciado');

    console.log((<any>window).ipcRenderer.on);
  }
}
