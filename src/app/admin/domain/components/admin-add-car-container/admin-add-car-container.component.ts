import { Component, Inject } from '@angular/core';
import { finalize, Observable, of, tap, switchMap } from 'rxjs';
import { TuiAlertService } from '@taiga-ui/core';
import { ApiService } from 'src/app/api/api.service';
import { CarMarkDto } from 'src/app/api/dto/car-mark.dto';
import { CarModelDto } from 'src/app/api/dto/car-model.dto';
import { AdminAddCarFormOutput } from '../admin-add-car-form/admin-add-car-form.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'dv-admin-add-car-container',
  templateUrl: './admin-add-car-container.component.html',
  styleUrls: ['./admin-add-car-container.component.scss']
})
export class AdminAddCarContainerComponent {
  protected loader = true;
  protected years: number[] = [];
  protected marks$: Observable<CarMarkDto[]>;
  protected models$: Observable<CarModelDto[] | null> = of(null);

  constructor(
    private readonly _api: ApiService,
    @Inject(TuiAlertService) private readonly _alertService: TuiAlertService
  ) {
    this.marks$ = this._api.marks().pipe(finalize(() => this.loader = false));
  }

  protected changedMark(markId: string): void {
    this.years = [];
    this.models$ = markId ? this._api.models(markId) : of(null);
  }

  protected changedModel(model: CarModelDto): void {
    const yearFrom = model.yearFrom;
    const yearTo = model.yearTo || new Date().getFullYear();
    for (let year = yearFrom; year <= yearTo; year++)  this.years.push(year);
  }

  protected createCar(form: AdminAddCarFormOutput): void {
    this.loader = true;
    this._api.addCar({
      cc: form.cc,
      engine: form.engineType.key,
      img: form.img,
      mark: form.mark.name,
      model: form.model.name,
      price: form.price,
      year: form.year,
      availability: form.availability,
      _id:''
    }).pipe(
      untilDestroyed(this),
      switchMap(() => this._alertService.open('Машина успешно добавлена!')),
      finalize(() => this.loader = false)
    )
      .subscribe();
  }
}
