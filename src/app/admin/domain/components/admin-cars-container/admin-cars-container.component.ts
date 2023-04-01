import { engineData } from 'src/app/user/domain/models/engine';
import { Observable, tap, map, of, debounceTime, switchMap, Subject, finalize, merge } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Car } from 'src/app/api/dto/car.dto';

@UntilDestroy()
@Component({
  selector: 'app-admin-cars-container',
  templateUrl: './admin-cars-container.component.html',
  styleUrls: ['./admin-cars-container.component.scss']
})
export class AdminCarsContainerComponent {
  protected updateRequest$: Subject<Car> = new Subject();
  protected refetch$: Subject<void> = new Subject();
  protected loading: boolean = false;
  protected engineData = engineData;
  protected cars$!: Observable<Car[]>;
  protected updating: Record<string, boolean> = {};

  constructor(private readonly _apiService: ApiService) { }

  ngOnInit(): void {
    this.cars$ = merge(of(null), this.refetch$).pipe(switchMap(() => this._apiService.cars()));

    this.updateRequest$.pipe(
      untilDestroyed(this),
      tap(car => this.updating[car._id] = true),
      switchMap(car => this._apiService.updateCar({
        availability: car.availability,
        id: car._id
      }).pipe(map(() => car))),
      tap(car => this.updating[car._id] = false),
      finalize(() => this.loading = false)
    ).subscribe()
  }

  protected deleteUserRequest(car: Car): void {
    this.updating[car._id] = true;
    this._apiService.deleteCar(car._id).pipe(
      untilDestroyed(this),
      tap(() => this.refetch$.next()),
      finalize(() => this.updating[car._id] = false)
    ).subscribe()
  }
}
