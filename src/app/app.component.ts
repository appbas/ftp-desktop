import { Component, effect, signal } from '@angular/core';

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
    console.log(window.engeetec);
    setTimeout(() => window.engeetec.doThing(), 5000);
  }
}
