import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) { }

  public canActivate(): boolean {
    if (!this._authService.isAuthenticated()) {
      this._router.navigate(['/admin', 'auth']);
      return false;
    }

    return true;
  }
}
