import { CurrRate } from './dto/currate.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '@root/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCurrRateService {
  constructor(private http: HttpClient) { }

  public get(): Observable<CurrRate> {
    return this.http.get<CurrRate>(`${environment.apiKey}/api/curr-rate`).pipe(map((r: any) => r.data));
  }
}
