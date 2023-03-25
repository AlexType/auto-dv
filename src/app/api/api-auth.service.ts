import { UserDto } from './dto/user.dto';
import { LoginDto } from './dto/login.dto';
import { CurrRate } from './dto/currate.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '@root/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  constructor(private http: HttpClient) { }

  public login(form: LoginDto): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.apiKey}/auth/login`, form)
  }

  public users(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${environment.apiKey}/auth/users`);
  }
}
