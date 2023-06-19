import { Injectable, effect } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Clock } from '../../models/clocking.model';

@Injectable({
  providedIn: 'root',
})
export class ClockService {
  MOCK = [
    {
      initPeriod: '2023-05-21T00:00:00Z',
      endPeriod: '2023-06-21T00:00:00Z',
      clockings: [
        {
          id: '638203104000000000|33300000',
          date: '2023-05-22T00:00:00Z',
          origin: 'manual',
          hour: 33300000.0,
          direction: 'entry',
          referenceDate: '2023-05-22T00:00:00Z',
          sequence: 1,
          justify: 'Home Office',
          status: {
            id: '22/05/2023 00:00:00|33300000',
            status: 'approved',
          },
          isOutFence: false,
          hasCoordinates: false,
          divergent: [],
        },
        {
          id: '638222976000000000|25500000',
          date: '2023-06-14T00:00:00Z',
          origin: 'geolocation',
          hour: 25500000.0,
          direction: 'entry',
          referenceDate: '2023-06-14T00:00:00Z',
          sequence: 1,
          justify: 'Portaria 373',
          status: {
            id: '14/06/2023 00:00:00|25500000',
            status: 'approved',
          },
          isOutFence: false,
          hasCoordinates: true,
          longitude: '-48.0892215',
          latitude: '-15.882842',
          divergent: [
            {
              label: 'BATIDA IMPAR',
              type: 'oddBeat',
            },
            {
              label: 'FALTA',
              type: 'danger',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  clocks(): Observable<Clock[]> {
    return of(this.MOCK);
  }
}
