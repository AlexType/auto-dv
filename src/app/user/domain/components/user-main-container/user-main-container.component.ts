import { Observable, of } from 'rxjs';
import { ReviewDto } from './../../../../api/dto/review.dto';
import { ApiService } from './../../../../api/api.service';
import { SendMailService } from './../../services/send-mail.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/api/dto/car.dto';

@Component({
  selector: 'app-user-main-container',
  templateUrl: './user-main-container.component.html',
  styleUrls: ['./user-main-container.component.scss']
})
export class UserMainContainerComponent implements OnInit {
  protected reviews$: Observable<ReviewDto[]> = of([]);
  protected cars$: Observable<Car[]> = of([]);

  constructor(
    private readonly _api: ApiService,
    private readonly _sendMailService: SendMailService
  ) { }

  ngOnInit(): void {
    this.reviews$ = this._api.reviews()
    this.cars$ = this._api.popularCars();
  }

  protected sendRequest(): void {
    this._sendMailService.openDialog();
  }
}
