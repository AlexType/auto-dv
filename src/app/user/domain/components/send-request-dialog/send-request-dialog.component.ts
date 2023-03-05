import { ApiService } from './../../../../api/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize, tap } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-send-request-dialog',
  templateUrl: './send-request-dialog.component.html',
  styleUrls: ['./send-request-dialog.component.scss']
})
export class SendRequestDialogComponent implements OnInit {
  protected loading: boolean = false;

  protected fg!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _api: ApiService,
    private readonly _snackBar: MatSnackBar,
    protected readonly _dialogRef: MatDialogRef<SendRequestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SendRequestDialogData
  ) { }

  ngOnInit(): void {
    this.fg = this._fb.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      comment: [this.data?.previewText || '']
    });
  }

  protected close(): void {
    this._dialogRef.close();
  }

  protected send(): void {
    if (!this.fg.valid) return;

    this.loading = true;
    this._api.sendMail(this.fg.value).pipe(
      untilDestroyed(this),
      tap(() => {
        this._snackBar.open('Заявка успешно отправлена!');
        this.close();
      }),
      finalize(() => this.loading = false)
    ).subscribe()
  }
}

export interface SendRequestDialogData {
  previewText?: string;
}

