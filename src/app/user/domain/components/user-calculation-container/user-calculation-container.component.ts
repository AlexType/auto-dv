import { of, Observable } from 'rxjs';
import { ApiCurrRateService } from './../../../../api/api.currrate.service';
import { Component, OnInit } from '@angular/core';
import { CurrRate } from 'src/app/api/dto/currate.dto';

@Component({
  selector: 'app-user-calculation-container',
  templateUrl: './user-calculation-container.component.html',
  styleUrls: ['./user-calculation-container.component.scss']
})
export class UserCalculationContainerComponent implements OnInit {
  protected currRate$: Observable<CurrRate | null> = of(null);

  constructor(private readonly _apiCurrRateService: ApiCurrRateService) { }

  ngOnInit(): void {
    this._apiCurrRateService.get().subscribe(e=>{
      console.log(e);

    })
    // this.currRate$ = this._apiCurrRateService.get()
  }
}
