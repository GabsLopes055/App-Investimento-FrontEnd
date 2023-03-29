import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Client[]> {
    const url = `${environment.baseUrlBackend}/clients`;
    return this.httpClient.get<Client[]>(url);

  }

}
