import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, MainNavComponent],
  imports: [CommonModule, RouterModule, UiKitModule],
})
export class LayoutsModule {}
