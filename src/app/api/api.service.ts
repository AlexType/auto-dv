import { Car } from './dto/car.dto';
import { ReviewDto } from './dto/review.dto';
import { SendMailDto } from './dto/send-mail-form.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public reviews(): Observable<ReviewDto[]> {
    return this.http.get<ReviewDto[]>('http://localhost:5000/auth/reviews');
  }

  public popularCars(): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:5000/auth/popular-cars');
  }

  public sendMail(form: SendMailDto): Observable<void> {
    return this.http.post<void>('http://localhost:5000/auth/send-mail', form)
  }
}
