import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { TuiAvatarModule, TuiBadgeModule, TuiIslandModule, TuiElasticContainerModule, TuiInputNumberModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule, TuiNotificationModule } from '@taiga-ui/core';
@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatSelectModule],
  exports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, BreadcrumbsComponent, MatSelectModule,
    TuiButtonModule,
    TuiAvatarModule,
    TuiBadgeModule,
    TuiElasticContainerModule,
    TuiIslandModule,
    TuiNotificationModule,
    TuiLoaderModule,
    TuiInputNumberModule],
})
export class UiKitModule { }
