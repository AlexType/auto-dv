import { Component, Input } from '@angular/core';
import { ReviewDto } from 'src/app/api/dto/review.dto';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review!: ReviewDto;
}
