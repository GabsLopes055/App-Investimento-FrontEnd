import { Client } from './../clients/shared/client.model';
import { ClientsService } from './../clients/shared/clients.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public clientAll: Array<Client> = [];

  constructor(private clientService: ClientsService){
    this.listAll()
  }

  private listAll(){
    return this.clientService.listAll().subscribe(client => {
      this.clientAll = client;
    });
  }

}
