import { ClientsService } from './../shared/clients.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-modal-remove',
  templateUrl: './modal-remove.component.html',
  styleUrls: ['./modal-remove.component.css']
})
export class ModalRemoveComponent {

  private client!: Client

  constructor(
    private clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number, name: string }) {
  }

  public removeclient() {
    this.clientService.removeClient(this.data.id).subscribe(() => {
      this.clientService.showMessage('Cliente Excluido !');
      location.reload()
    })
  }

}
