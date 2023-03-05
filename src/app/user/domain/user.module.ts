import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFaqContainerComponent } from './components/user-faq-container/user-faq-container.component';
import { UserServicesContainerComponent } from './components/user-services-container/user-services-container.component';
import { UserMainContainerComponent } from './components/user-main-container/user-main-container.component';
import { UserMainViewComponent } from './components/user-main-view/user-main-view.component';
import { SendRequestDialogComponent } from './components/send-request-dialog/send-request-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AutoModule } from '../../auto/auto.module';
import { SwiperModule } from 'swiper/angular';
import { ReviewComponent } from './components/review/review.component';
import { InviteBlockViewComponent } from './components/invite-block-view/invite-block-view.component';
import { UserContactsContainerComponent } from './components/user-contacts-container/user-contacts-container.component';
import { UserContactViewComponent } from './components/user-contact-view/user-contact-view.component';
import { UserCalculationContainerComponent } from './components/user-calculation-container/user-calculation-container.component';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserFaqContainerComponent,
    UserServicesContainerComponent,
    UserMainContainerComponent,
    UserMainViewComponent,
    SendRequestDialogComponent,
    ReviewComponent,
    InviteBlockViewComponent,
    UserContactsContainerComponent,
    UserContactViewComponent,
    UserCalculationContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    AutoModule,
    SwiperModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  exports: [
    UserFaqContainerComponent,
    UserServicesContainerComponent,
    UserMainContainerComponent,
    UserContactsContainerComponent,
    UserCalculationContainerComponent
  ]
})
export class UserModule { }
