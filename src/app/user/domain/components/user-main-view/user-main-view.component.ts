import { ReviewDto } from './../../../../api/dto/review.dto';
import { Output, Input } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import SwiperCore, { Grid, SwiperOptions, Autoplay } from 'swiper';
import { Car } from 'src/app/api/dto/car.dto';

SwiperCore.use([Grid, Autoplay]);

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
    navigation: false,
    autoplay: true,
    scrollbar: { draggable: true },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 25,
        slidesPerGroup: 1,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 25,
        slidesPerGroup: 1,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 2,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 25,
        slidesPerGroup: 3,
        grid: {
          rows: 2,
          fill: "row"
        },
      }
    }
  }

  protected swiperConfig2: SwiperOptions = {
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: false,
    autoplay: true,
    scrollbar: { draggable: true },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      }
    }
  }

  ngOnInit() { }
}
