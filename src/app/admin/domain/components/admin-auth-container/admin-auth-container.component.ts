import { Router } from '@angular/router';
import { tap, filter } from 'rxjs';
import { AuthService } from './../../../../services/auth.service';
import { Component } from '@angular/core';
import { LoginDto } from 'src/app/api/dto/login.dto';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-admin-auth-container',
  templateUrl: './admin-auth-container.component.html',
  styleUrls: ['./admin-auth-container.component.scss']
})
export class AdminAuthContainerComponent {
  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService
  ) { }

  protected submit(form: LoginDto): void {
    this._authService.login(form).pipe(
      filter(res => !!res.token),
      tap(() => this._router.navigate(['/admin', 'dashboard'])))
      .subscribe()
  }
}
