import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsListByClientComponent } from './investments-list-by-client/investments-list-by-client.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';

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
    MatDividerModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule
  ]
})
export class InvestmentsModule { }
