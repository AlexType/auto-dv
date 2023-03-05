import { CurrRate } from './dto/currate.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCurrRateService {
  constructor(private http: HttpClient) { }

  public get(): Observable<CurrRate> {
    return this.http.get<CurrRate>('http://localhost:5000/auth/curr-rate').pipe(map((r: any) => r.data));
  }
}
