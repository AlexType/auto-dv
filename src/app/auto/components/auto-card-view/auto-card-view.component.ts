import { SendMailService } from './../../../user/domain/services/send-mail.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Car } from 'src/app/api/dto/car.dto';

@Component({
  selector: 'app-auto-card-view',
  templateUrl: './auto-card-view.component.html',
  styleUrls: ['./auto-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutoCardViewComponent {
  @Input() car!: Car;

  constructor(private readonly _sendMailService: SendMailService) { }

  protected sendRequest(): void {
    this._sendMailService.openDialog({ previewText: `Интересует ${this.car.mark} ${this.car.model}` });
  }
}
