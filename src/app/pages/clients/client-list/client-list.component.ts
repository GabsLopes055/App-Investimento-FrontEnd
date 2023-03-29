import { Client } from './../shared/client.model';
import { ClientsService } from '../shared/clients.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalClientsComponent } from '../modal-clients/modal-clients.component'

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  client!: Client[];

  indices: string[] = ['id', 'nome', 'email', 'createdAt', 'ver', 'editar', 'remover'];
  dataSource = this.showListClients();

  constructor(
    private clientsService: ClientsService,
    private dialog: MatDialog,
    private modalCliente: ModalClientsComponent) { }

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
    this.dialog.open(ModalClientsComponent,{
      width: '800px',
      height: 'auto'
    })
  }



}
