import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPagesRoutingModule } from './user-pages-routing.module';
import { UserServicesPageComponent } from './components/user-services-page/user-services-page.component';
import { UserFaqPageComponent } from './components/user-faq-page/user-faq-page.component';
import { UserMainPageComponent } from './components/user-main-page/user-main-page.component';
import { UserModule } from '../domain/user.module';
import { UserContactsPageComponent } from './components/user-contacts-page/user-contacts-page.component';
import { UserCalculationPageComponent } from './components/user-calculation-page/user-calculation-page.component';
import { UserAutoPageComponent } from './components/user-auto-page/user-auto-page.component';


@NgModule({
  declarations: [
    UserServicesPageComponent,
    UserFaqPageComponent,
    UserMainPageComponent,
    UserContactsPageComponent,
    UserCalculationPageComponent,
    UserAutoPageComponent
  ],
  imports: [
    CommonModule,
    UserPagesRoutingModule,
    UserModule
  ]
})
export class UserPagesModule { }
