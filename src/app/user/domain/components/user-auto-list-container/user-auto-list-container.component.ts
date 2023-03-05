import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize, Observable, of } from 'rxjs';
import { ApiService } from 'src/app/api/api.service';
import { Car } from 'src/app/api/dto/car.dto';

@Component({
  selector: 'app-user-auto-list-container',
  templateUrl: './user-auto-list-container.component.html',
  styleUrls: ['./user-auto-list-container.component.scss']
})
export class UserAutoListContainerComponent implements OnInit {
  protected cars$: Observable<Car[]> = of([]);
  protected loading: boolean = true;
  protected fg!: FormGroup;

  protected marks: string[] = [
    'Toyota',
    'SUBARU',
    'MERCEDES BENZ',
    'KIA',
    'VOLVO',
    'BMW'
  ];

  constructor(
    private readonly _api: ApiService,
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      mark: [null]
    });

    this.fetch();
  }

  protected fetch(): void {
    this.loading = true;
    this.cars$ = this._api.cars(this.fg.value?.mark).pipe(finalize(() => this.loading = false));
  }

  protected reset():void{
    this.fg.reset();
    this.fetch();
  }
}
