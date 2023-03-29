import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { ModalClientsComponent } from './modal-clients/modal-clients.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ClientListComponent,
    ModalClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,
    MatInputModule
  ],
  providers: [
    ModalClientsComponent
  ]
})
export class ClientsModule { }
