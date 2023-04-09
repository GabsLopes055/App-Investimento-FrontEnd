import { Client } from './../shared/client.model';
import { ClientsService } from './../shared/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent {

  public client!: Client;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private clientsService: ClientsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clientsService.findById(id).subscribe((Client) => {
      this.client = Client
      console.log(this.client)
    })
  }

  cancel() {
    this.location.back()
  }

}
