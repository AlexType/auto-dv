import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginDto } from 'src/app/api/dto/login.dto';

@Component({
  selector: 'app-admin-auth-form',
  templateUrl: './admin-auth-form.component.html',
  styleUrls: ['./admin-auth-form.component.scss']
})
export class AdminAuthFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<LoginDto> = new EventEmitter();

  protected fg!: FormGroup;

  constructor(private readonly _fb: FormBuilder) { }

  ngOnInit() {
    this.fg = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
