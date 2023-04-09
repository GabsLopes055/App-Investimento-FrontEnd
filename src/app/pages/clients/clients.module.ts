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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from './modal-edit/modal-edit.component';
import { ModalRemoveComponent } from './modal-remove/modal-remove.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { MatCardModule } from '@angular/material/card';
import { InvestmentsModule } from '../investments/investments.module';


@NgModule({
  declarations: [
    ClientListComponent,
    ModalClientsComponent,
    ModalEditComponent,
    ModalRemoveComponent,
    ClientViewComponent,

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
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    InvestmentsModule
  ],
  providers: [
    ModalClientsComponent,
    ModalEditComponent
  ]
})
export class ClientsModule { }
