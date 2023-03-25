import { TuiAlertModule, TuiDataListModule, TuiLoaderModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthContainerComponent } from './components/admin-auth-container/admin-auth-container.component';
import { AdminAuthFormComponent } from './components/admin-auth-form/admin-auth-form.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { TuiBadgeModule, TuiDataListWrapperModule, TuiInputModule, TuiSelectModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
import { TuiThemeNightModule } from '@taiga-ui/core';
import { TuiModeModule } from '@taiga-ui/core';
import { TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiNotificationModule } from '@taiga-ui/core';
import { AdminDashboardContainerComponent } from './components/admin-dashboard-container/admin-dashboard-container.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { TuiAvatarModule } from '@taiga-ui/kit';
import {TuiTableModule} from '@taiga-ui/addon-table';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { AdminCarCreatorContainerComponent } from './components/admin-car-creator-container/admin-car-creator-container.component';
import { TuiPortalModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [
    AdminAuthContainerComponent,
    AdminAuthFormComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent,
    AdminHeaderComponent,
    AdminCarCreatorContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    UiKitModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,

    TuiInputModule,
    TuiInputPasswordModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiButtonModule,
    TuiNotificationModule,
    TuiAvatarModule,
    TuiTableModule,
    TuiBadgeModule,
    TuiToggleModule,
    TuiTextAreaModule,
    TuiLoaderModule,
    TuiSelectModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiPortalModule
  ],
  exports: [
    AdminAuthContainerComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent,
    AdminCarCreatorContainerComponent
  ]
})
export class AdminDomainModule { }
