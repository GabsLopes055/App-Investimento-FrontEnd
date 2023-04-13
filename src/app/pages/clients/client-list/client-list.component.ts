import { Router } from '@angular/router';
import { Client } from './../shared/client.model';
import { ClientsService } from '../shared/clients.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientsComponent } from '../modal-clients/modal-clients.component'
import { ModalEditComponent } from '../modal-edit/modal-edit.component'
import { ModalRemoveComponent } from '../modal-remove/modal-remove.component'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  client!: Client[];


  indices: string[] = ['id', 'nome', 'email', 'createdAt', 'investimentos', 'editar', 'remover'];
  // dataSource = this.showListClients();

  constructor(
    private clientsService: ClientsService,
    private dialog: MatDialog,
    private router: Router) { }

  public listClients: Array<Client> = [];

  ngOnInit(): void {
    this.showListClients();
  }

  showListClients() {
    return this.clientsService.listAll().subscribe(client => {
      this.client = client;
    });
  }

  public criarCliente() {
    this.dialog.open(ModalClientsComponent)
  }

  public updateClient(id: number) {
    this.dialog.open(ModalEditComponent, {
      data: { id: id }
    })
  }

  public deleteClient(id: number, name: string) {
    this.dialog.open(ModalRemoveComponent, {
      data: {
        id: id,
        name: name
      }
    })
  }

  public viewClient(id: number) {
    this.router.navigate(['/dashboard/clients/view/',id])
  }


}
