import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/FrameHTML/rm/api/rest/new/auth/login`,
      {
        password,
        user,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
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
