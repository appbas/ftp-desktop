import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { UserData } from 'src/app/modules/login/models/user.model';
import { CookieService } from '../cookies.service';

const USER = 'u_p_s_t';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private cookie: CookieService;

  constructor() {
    this.cookie = inject(CookieService);
  }

  saveStorage(userData: UserData) {
    this.cookie.setCookie(USER, JSON.stringify(userData), 1);
  }

  getUser(): UserData | undefined {
    const user = this.cookie.getCookie(USER);

    return !!user ? JSON.parse(user) as UserData : undefined;
  }
}
