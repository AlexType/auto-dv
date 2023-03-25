import { UserDto } from './../../../../api/dto/user.dto';
import { AuthService } from './../../../../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  protected user!: UserDto;

  constructor(private readonly _authService: AuthService) { }

  ngOnInit(): void {
    this.user = this._authService.user;
  }

  protected logout(): void {
    this._authService.logout();
  }
}
