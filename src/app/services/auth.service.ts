import { UserDto } from './../api/dto/user.dto';
import { CookieService } from 'ngx-cookie-service';
import { tap, Observable } from 'rxjs';
import { LoginDto } from './../api/dto/login.dto';
import { Injectable } from '@angular/core';
import { ApiAuthService } from '../api/api-auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly _router: Router,
    private readonly _apiAuth: ApiAuthService,
    private readonly _jwtHelper: JwtHelperService,
    private readonly _cookieService: CookieService
  ) { }

  public login(form: LoginDto): Observable<{ token: string }> {
    return this._apiAuth.login(form).pipe(tap(res => {
      if (!res.token) return;
      this._cookieService.set('token', res.token)
    }))
  }

  public logout() {
    this._cookieService.delete('token');
    this._router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const token = this._cookieService.get('token');
    return !this._jwtHelper.isTokenExpired(token);
  }

  public get user(): UserDto {
    const token = this._cookieService.get('token');
    return jwt_decode(token);
  }
}
