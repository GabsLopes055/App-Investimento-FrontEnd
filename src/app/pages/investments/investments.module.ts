import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsListByClientComponent } from './investments-list-by-client/investments-list-by-client.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    InvestmentsListByClientComponent
  ],
  exports: [
    InvestmentsListByClientComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    MatDividerModule
  ]
})
export class InvestmentsModule { }
