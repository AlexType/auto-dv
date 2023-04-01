import { TuiModeModule } from '@taiga-ui/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { AdminAuthPageComponent } from './components/admin-auth-page/admin-auth-page.component';
import { AdminDomainModule } from '../domain/admin-domain.module';
import { AdminDashboardPageComponent } from './components/admin-dashboard-page/admin-dashboard-page.component';
import { AdminCarCreatorPageComponent } from './components/admin-car-creator-page/admin-car-creator-page.component';
import { AdminCarsPageComponent } from './components/admin-cars-page/admin-cars-page.component';


@NgModule({
  declarations: [
    AdminAuthPageComponent,
    AdminDashboardPageComponent,
    AdminCarCreatorPageComponent,
    AdminCarsPageComponent,
  ],
  imports: [
    CommonModule,
    AdminDomainModule,
    AdminPagesRoutingModule,
    TuiModeModule
  ]
})
export class AdminPagesModule { }
