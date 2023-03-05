import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCardViewComponent } from './components/auto-card-view/auto-card-view.component';
import { UiKitModule } from '@root/ui-kit/ui-kit.module';



@NgModule({
  declarations: [AutoCardViewComponent],
  imports: [CommonModule, UiKitModule],
  exports: [AutoCardViewComponent]
})
export class AutoModule { }
