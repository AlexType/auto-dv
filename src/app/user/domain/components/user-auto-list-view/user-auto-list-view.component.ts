import { Car } from './../../../../api/dto/car.dto';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-auto-list-view',
  templateUrl: './user-auto-list-view.component.html',
  styleUrls: ['./user-auto-list-view.component.scss']
})
export class UserAutoListViewComponent {
  @Input() cars!: Car[] | null;
  @Input() loading!: boolean;
}
