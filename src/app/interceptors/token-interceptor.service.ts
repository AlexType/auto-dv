import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError, tap } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private readonly _authService: AuthService,
    private readonly _cookieService: CookieService
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._cookieService.get('token');

    if (token) {
      request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) this._authService.logout();

        return throwError(() => error);
      })
    );
  }
}
