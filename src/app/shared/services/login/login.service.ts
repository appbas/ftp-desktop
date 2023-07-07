import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Signal } from '@angular/core';
import { Observable, map, tap, of, throwError, delay } from 'rxjs';
import { Login, UserData } from 'src/app/modules/login/models/user.model';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private readonly http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  login({ login, password }: Login): Observable<any> {

    if (login !== 'bruno' || password !== 'bruno') {
      return throwError(() => new Error('Acesso negado'));
    }

    return of({
      login,
      name: 'Bruno.Silva',
      permissions: ['home'],
      token: 'asdf.aasdfasdf.4a5sd4'
    } as UserData).pipe(delay(3000));

    // return this.http.post(
    //   `${environment.baseUrl}/FrameHTML/rm/api/rest/new/auth/login`,
    //   {
    //     password,
    //     user,
    //   },
    //   {
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //   }
    // );
  }

  // https://portalmeurh.sicoob.com.br/FrameHTML/rm/api/rest/data/profile/image/%7Bcurrent%7D/
  image() {
    return this.http
      .get<any>(
        `${environment.baseUrl}/FrameHTML/rm/api/rest/data/profile/image/%7Bcurrent%7D/`,
        {
          headers: {
            'content-type': 'application/json',
          },
        }
      )
      .pipe(map((dataImage) => dataImage?.data?.content));
  }
}
