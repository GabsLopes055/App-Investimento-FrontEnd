import { Client } from './../../clients/shared/client.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-investments-list-by-client',
  templateUrl: './investments-list-by-client.component.html',
  styleUrls: ['./investments-list-by-client.component.css']
})
export class InvestmentsListByClientComponent {


  @Input() client!: Client

  constructor() {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const clientId = Number(this.activedRoute.snapshot.paramMap.get(id))
  }

}
