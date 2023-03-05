import { SendMailService } from './../../user/domain/services/send-mail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private readonly _sendMailService: SendMailService) { }

  ngOnInit(): void { }

  protected sendRequest(): void {
    this._sendMailService.openDialog();
  }
}
