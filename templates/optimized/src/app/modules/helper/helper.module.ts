import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { A11yModule } from '@angular/cdk/a11y'
import { CdkAccordionModule } from '@angular/cdk/accordion'
import { ClipboardModule } from '@angular/cdk/clipboard'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { PortalModule } from '@angular/cdk/portal'
import { ScrollingModule } from '@angular/cdk/scrolling'
import { CdkStepperModule } from '@angular/cdk/stepper'
import { CdkTableModule } from '@angular/cdk/table'
import { CdkTreeModule } from '@angular/cdk/tree'
import { OverlayModule } from '@angular/cdk/overlay'
import { CdkMenuModule } from '@angular/cdk/menu'
import { DialogModule } from '@angular/cdk/dialog'



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [

    A11yModule,
    CdkAccordionModule,
    CdkMenuModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    ClipboardModule,
    DialogModule,
    DragDropModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ]
})
export class HelperModule { }
