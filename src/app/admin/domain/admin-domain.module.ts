import { TuiDataListModule, TuiLoaderModule } from '@taiga-ui/core';
import { RouterModule } from '@angular/router';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAuthContainerComponent } from './components/admin-auth-container/admin-auth-container.component';
import { AdminAuthFormComponent } from './components/admin-auth-form/admin-auth-form.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { TuiBadgeModule, TuiDataListWrapperModule, TuiInputFilesModule, TuiInputModule, TuiSelectModule, TuiTextAreaModule, TuiToggleModule } from '@taiga-ui/kit';
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
import { TuiActiveZoneModule, TuiPortalModule } from '@taiga-ui/cdk';
import { AdminAddCarFormComponent } from './components/admin-add-car-form/admin-add-car-form.component';
import { AdminAddCarContainerComponent } from './components/admin-add-car-container/admin-add-car-container.component';
import { FormKitModule } from '@root/ui-kit/form-kit/form-kit.module';
import { AdminCarsContainerComponent } from './components/admin-cars-container/admin-cars-container.component';

@NgModule({
  declarations: [
    AdminAuthContainerComponent,
    AdminAuthFormComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent,
    AdminHeaderComponent,
    AdminAddCarFormComponent,
    AdminAddCarContainerComponent,
    AdminCarsContainerComponent
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
    TuiPortalModule,
    FormKitModule,
    TuiActiveZoneModule,
    TuiInputFilesModule
  ],
  exports: [
    AdminAuthContainerComponent,
    AdminLayoutComponent,
    AdminDashboardContainerComponent,
    AdminAddCarContainerComponent,
    AdminCarsContainerComponent
  ]
})
export class AdminDomainModule { }
