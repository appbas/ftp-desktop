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
  }

  loadFiles(): void {
    console.log('iniciado');
    setTimeout(() => (<any>window).electron.doThing(), 5000);
  }
}
