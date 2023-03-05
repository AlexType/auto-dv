import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, MatSelectModule],
  exports: [MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatIconModule, BreadcrumbsComponent, MatSelectModule],
})
export class UiKitModule { }
