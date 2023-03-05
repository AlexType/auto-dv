import { Engine } from './../../models/engine';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { of, Observable, finalize } from 'rxjs';
import { ApiCurrRateService } from './../../../../api/api.currrate.service';
import { Component, OnInit } from '@angular/core';
import { CurrRate } from 'src/app/api/dto/currate.dto';

@Component({
  selector: 'app-user-calculation-container',
  templateUrl: './user-calculation-container.component.html',
  styleUrls: ['./user-calculation-container.component.scss']
})
export class UserCalculationContainerComponent implements OnInit {
  protected loading: boolean = true;
  protected dateTime!: Date;
  protected calcRes: number | undefined;
  protected currRate$: Observable<CurrRate | null> = of(null);
  protected fg: FormGroup = this._fb.group({
    aucPrice: [null, [Validators.required]],
    cc: [null, [Validators.required]],
    ls: [null, [Validators.required]],
    engine: [Engine.Hybrid, [Validators.required]],
    age: [CarAge.Low, [Validators.required]]
  });

  protected readonly engine = Engine;
  protected readonly carAge = CarAge;

  private readonly _percentageEngine: Record<Engine, number> = {
    [Engine.Diesel]: 8,
    [Engine.Gas]: 6,
    [Engine.Hybrid]: 4,
    [Engine.Electro]: 2
  }

  private readonly _percentageAge: Record<CarAge, number> = {
    [CarAge.Low]: 2,
    [CarAge.Mid]: 6,
    [CarAge.High]: 8,
    [CarAge.Oldest]: 10
  }

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _apiCurrRateService: ApiCurrRateService
  ) { }

  ngOnInit(): void {
    this.dateTime = new Date();
    this.currRate$ = this._apiCurrRateService.get().pipe(finalize(() => this.loading = false));
  }

  protected calculate(val: number): void {
    if (!this.fg.valid) return;

    const diff = this.fg.value.cc / this.fg.value.ls;
    this.calcRes = (this.fg.value.aucPrice * diff) * ((this._percentageEngine[this.fg.value.engine as Engine] + this._percentageAge[this.fg.value.age as CarAge]) / 100) * val;
  }
}

export enum CarAge {
  Low,
  Mid,
  High,
  Oldest
}
