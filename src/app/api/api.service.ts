import { Car } from './dto/car.dto';
import { ReviewDto } from './dto/review.dto';
import { SendMailDto } from './dto/send-mail-form.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@root/env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public reviews(): Observable<ReviewDto[]> {
    return this.http.get<ReviewDto[]>(`${environment.apiKey}/auth/reviews`);
  }

  public popularCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiKey}/auth/popular-cars`);
  }

  public sendMail(form: SendMailDto): Observable<void> {
    return this.http.post<void>(`${environment.apiKey}/auth/send-mail`, form)
  }
}
