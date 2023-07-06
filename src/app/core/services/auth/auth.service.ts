import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from 'src/app/modules/login/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient;

  constructor() {
    this.http = inject(HttpClient);
  }

  getLogin(): Observable<UserData> {
    const login = {
      login: 'login',
      name: 'Login',
      token: '',
      permissions: [],
    } as UserData;
    return of(login);
  }
}
