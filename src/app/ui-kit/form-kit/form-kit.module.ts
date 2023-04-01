import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiInputModule, TuiTextAreaModule, TuiInputPasswordModule, TuiDataListWrapperModule, TuiSelectModule, TuiComboBoxModule, TuiCheckboxLabeledModule } from '@taiga-ui/kit';
import { TuiDataListModule, TuiTextfieldControllerModule } from '@taiga-ui/core';



@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    TuiInputModule,
    TuiTextAreaModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiComboBoxModule,
    TuiCheckboxLabeledModule
  ]
})
export class FormKitModule { }
