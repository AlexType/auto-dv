import { TuiAlertModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminAuthContainerComponent } from './components/admin-auth-container/admin-auth-container.component';
import { AdminAuthFormComponent } from './components/admin-auth-form/admin-auth-form.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiThemeNightModule } from '@taiga-ui/core';
import { TuiModeModule } from '@taiga-ui/core';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiNotificationModule } from '@taiga-ui/core';
import { AdminDashboardContainerComponent } from './components/admin-dashboard-container/admin-dashboard-container.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { TuiAvatarModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    AdminAuthContainerComponent,
    AdminAuthFormComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent,
    AdminHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule,
    ReactiveFormsModule,

    TuiInputModule,
    TuiInputPasswordModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiButtonModule,
    TuiNotificationModule,
    TuiAvatarModule
  ],
  exports: [
    AdminAuthContainerComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent
  ]
})
export class AdminDomainModule { }
