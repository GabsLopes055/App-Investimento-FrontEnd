import { Investment } from './../shared/investments.model';
import { Client } from './../../clients/shared/client.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Input } from '@angular/core';
import { investmentsService } from '../shared/investments.service';


@Component({
  selector: 'app-investments-list-by-client',
  templateUrl: './investments-list-by-client.component.html',
  styleUrls: ['./investments-list-by-client.component.css']
})
export class InvestmentsListByClientComponent {


  @Input() client!: Client

  public investments: Investment[] = [];

  constructor(private investmentService: investmentsService) { }

  indices: string[] = ['id', 'name', 'amount', 'clientId', 'indicadorCarencia', 'stocks', 'createdAt']

  // 

  // dataSource = this.findInvestmentClientById()

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
   this.investmentService.listInvestmentsByClientId(this.client.id as number).subscribe(Investment =>
    this.investments = Investment)
      
  }

  public findInvestmentsClient() {
     
      
  }


}
