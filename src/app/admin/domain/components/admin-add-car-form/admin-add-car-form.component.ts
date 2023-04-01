import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { CarMarkDto } from 'src/app/api/dto/car-mark.dto';
import { CarModelDto } from 'src/app/api/dto/car-model.dto';
import { Engine, engineArrayData } from 'src/app/user/domain/models/engine';

@UntilDestroy()
@Component({
  selector: 'dv-admin-add-car-form',
  templateUrl: './admin-add-car-form.component.html',
  styleUrls: ['./admin-add-car-form.component.scss']
})
export class AdminAddCarFormComponent {
  @Input() loader = false;
  @Input() years: number[] = [];
  @Input() marks: CarMarkDto[] | null = [];
  @Input() models: CarModelDto[] | null = null;

  @Output() changedMark: EventEmitter<string> = new EventEmitter();
  @Output() changedModel: EventEmitter<CarModelDto> = new EventEmitter();
  @Output() createCar: EventEmitter<AdminAddCarFormOutput> = new EventEmitter();

  protected fg!: FormGroup<AdminAddCarForm>;
  protected engineOptions = engineArrayData;

  constructor(private readonly _fb: FormBuilder) {
    this.fg = this._fb.group({
      cc: [<any>null, [Validators.required]],
      img: [<any>null, [Validators.required]],
      year: [<any>null, [Validators.required]],
      mark: [<any>null, [Validators.required]],
      model: [<any>null, [Validators.required]],
      price: [<any>null, [Validators.required]],
      engineType: [<any>null, [Validators.required]],
      availability: [<any>true, [Validators.required]]
    });

    this.fg.controls.mark.valueChanges.pipe(
      untilDestroyed(this),
      tap(mark => {
        this.changedMark.emit(mark?._id);
        this.fg.controls.model.reset();
        this.fg.controls.year.reset();
      })
    ).subscribe();

    this.fg.controls.model.valueChanges.pipe(
      untilDestroyed(this),
      tap(model => model && this.changedModel.emit(model))
    ).subscribe();
  }

  protected submit(): void {
    this.createCar.emit(this.fg.value as AdminAddCarFormOutput);
  }

  protected resetForm(): void {
    this.fg.reset();
  }
}

interface AdminAddCarForm {
  cc: FormControl<number>;
  img: FormControl<string>;
  year: FormControl<number>;
  price: FormControl<number>;
  mark: FormControl<CarMarkDto>;
  model: FormControl<CarModelDto>;
  engineType: FormControl<{ key: Engine; name: string }>;
  availability: FormControl<boolean>;
}


export interface AdminAddCarFormOutput {
  cc: number;
  img: string;
  year: number;
  price: number;
  mark: CarMarkDto;
  model: CarModelDto;
  engineType: { key: Engine; name: string };
  availability: boolean;
}
