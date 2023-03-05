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
    return this.http.get<CurrRate>('https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB&key=71560a08ff5a9d61e342cf9af1d811d8').pipe(
      map((r: any) => r.data)
    );
  }
}
