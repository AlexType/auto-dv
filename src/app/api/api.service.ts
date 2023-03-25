import { UserRequestDto } from './dto/user-request.dto';
import { Car } from './dto/car.dto';
import { ReviewDto } from './dto/review.dto';
import { SendMailDto } from './dto/send-mail-form.dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@root/env/environment';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  public reviews(): Observable<ReviewDto[]> {
    return this.http.get<ReviewDto[]>(`${environment.apiKey}/api/reviews`);
  }

  public popularCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiKey}/api/popular-cars`);
  }

  public cars(mark: string): Observable<Car[]> {
    return this.http.get<Car[]>(`${environment.apiKey}/api/cars${mark ? `?mark=${mark}` : ''}`);
  }

  public sendMail(form: SendMailDto): Observable<void> {
    return this.http.post<void>(`${environment.apiKey}/api/send-mail`, form)
  }

  public userRequests(): Observable<UserRequestDto[]> {
    return this.http.get<UserRequestDto[]>(`${environment.apiKey}/api/user-requests`);
  }

  public updateUserRequest(form: UpdateUserRequestDto): Observable<void> {
    return this.http.post<void>(`${environment.apiKey}/api/update-user-request`, form)
  }

  public deleteUserRequest(id: string): Observable<void> {
    return this.http.post<void>(`${environment.apiKey}/api/delete-user-request`, id)
  }
}
