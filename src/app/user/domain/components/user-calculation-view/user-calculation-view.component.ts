import { Engine } from './../../models/engine';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { CurrRate } from 'src/app/api/dto/currate.dto';

@Component({
  selector: 'app-user-calculation-view',
  templateUrl: './user-calculation-view.component.html',
  styleUrls: ['./user-calculation-view.component.scss']
})
export class UserCalculationViewComponent implements OnInit {
  @Input() loading: boolean | undefined;
  @Input() dateTime: Date | undefined;
  @Input() currRate: CurrRate | undefined | null;

  protected fg: FormGroup = this._fb.group({
    aucPrice: [null, [Validators.required]],
    cc: [null, [Validators.required]],
    ls: [null, [Validators.required]],
    engine: [Engine.Hybrid, [Validators.required]],
    age: [CarAge.Low, [Validators.required]]
  });
  protected calcRes: number | undefined;

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

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit(): void { }

  protected calculate(): void {
    if (!this.fg.valid) return;

    const diff = this.fg.value.cc / this.fg.value.ls;
    const jpy = this.currRate?.JPYRUB || 0;
    this.calcRes = (this.fg.value.aucPrice * diff) * ((this._percentageEngine[this.fg.value.engine as Engine] + this._percentageAge[this.fg.value.age as CarAge]) / 100) * (+jpy);
  }
}

export enum CarAge {
  Low,
  Mid,
  High,
  Oldest
}
