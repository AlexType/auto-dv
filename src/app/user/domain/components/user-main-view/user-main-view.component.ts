import { ReviewDto } from './../../../../api/dto/review.dto';
import { Output, Input } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import SwiperCore, { Grid, SwiperOptions } from 'swiper';
import { Car } from 'src/app/api/dto/car.dto';

SwiperCore.use([Grid]);

@Component({
  selector: 'app-user-main-view',
  templateUrl: './user-main-view.component.html',
  styleUrls: ['./user-main-view.component.scss']
})
export class UserMainViewComponent {
  @Input() cars: Car[] | null = []
  @Input() loading: boolean | undefined;
  @Input() reviews: ReviewDto[] | null = []

  @Output() sendRequest: EventEmitter<void> = new EventEmitter();

  protected swiperConfig: SwiperOptions = {
    // modules: [Grid],
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 3,
    navigation: false,
    grid: {
      rows: 2,
      fill: "row"
    },
    scrollbar: { draggable: true },
  }

  protected swiperConfig2: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: false,
    scrollbar: { draggable: true },
  }

  ngOnInit() { }
}
