import { SendMailService } from './../../services/send-mail.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-invite-block-view',
  templateUrl: './invite-block-view.component.html',
  styleUrls: ['./invite-block-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteBlockViewComponent {
  constructor(private readonly _sendMailService: SendMailService) { }

  protected sendRequest(): void {
    this._sendMailService.openDialog();
  }
}
