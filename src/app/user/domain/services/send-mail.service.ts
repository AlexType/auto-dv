import { SendRequestDialogComponent, SendRequestDialogData } from './../components/send-request-dialog/send-request-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private readonly _dialog: MatDialog) { }

  public openDialog(data?: SendRequestDialogData): void {
    this._dialog.open(SendRequestDialogComponent, { maxWidth: 500, data });
  }
}
