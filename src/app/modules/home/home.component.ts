import {
  Component,
  Signal,
  WritableSignal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { Observable, of, tap } from 'rxjs';
import { Clock, Clocking } from 'src/app/shared/models/clocking.model';
import { ClockService } from 'src/app/shared/services/clock/clock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private _clockService = inject(ClockService);
  private _route = inject(Router);
  clocks: Signal<Clock[] | undefined> | undefined;
  clockings = signal<Clocking[]>([]);

  constructor() {
    effect((clean) => {
      console.log('ásdklfjalksdf');
    });
    this.init();
  }

  init(): void {
    this.clocks = toSignal(
      this._clockService.clocks().pipe(
        tap((clock) => {
          console.log('asdfasdfas');
          this.clockings.set(
            clock
              .flatMap((c) => c.clockings)
              .map((c) => ({
                ...c,
                hour: this.hour(c.referenceDate, c.hour as number),
                // hour: this.toHoursAndMinutes(c.hour as number),
              }))
          );
        })
      )
    );

    // .map((c) => ({
    //   ...c,
    //   // hour: this.hour(c.hour as number),
    // }))
    // this.clocks.update(toSignal(this._clockService.clocks()));
    // this.clockings.set(
    //   this.clocks().flatMap((c) => {
    //     console.log(c);
    //     return { ...c.clockings };
    //   })
    // );
  }

  toHoursAndMinutes(totalSeconds: number): any {
    const totalMinutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return { h: hours, m: minutes, s: seconds };
  }

  private hour(date: string, hour: number): string {
    const dateHour = new Date(Date.parse(date));
    dateHour.setMilliseconds(hour);
    return dateHour.toISOString().replace('T', ' ').replace('Z', '');
  }

  onHome(): void {
    this._route.navigate(['']);
  }
}
