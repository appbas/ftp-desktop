import { HttpClient } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
}
