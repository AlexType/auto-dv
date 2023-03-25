import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { engineData } from 'src/app/user/domain/models/engine';

@Component({
  selector: 'app-admin-car-creator-container',
  templateUrl: './admin-car-creator-container.component.html',
  styleUrls: ['./admin-car-creator-container.component.scss']
})
export class AdminCarCreatorContainerComponent {

  protected fg!: FormGroup;
  protected engineData = [
    'Luke Skywalker',
    'Leia Organa Solo',
    'Darth Vader',
    'Han Solo',
    'Obi-Wan Kenobi',
    'Yoda',
  ];;

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this._fb.group({
      img: ['', [Validators.required]],
      mark: ['', [Validators.required]],
      model: ['', [Validators.required]],
      cc: ['', [Validators.required]],
      engine: ['', [Validators.required]],
      year: ['', [Validators.required]],
      price: ['', [Validators.required]]
    });
  }
}
