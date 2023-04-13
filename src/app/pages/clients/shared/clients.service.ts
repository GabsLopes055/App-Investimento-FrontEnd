import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { map, Observable, EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';

import { Client } from './client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar) { }


  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage(e)
    return EMPTY;
  }


  public listAll(): Observable<Client[]> {
    const url = `${environment.baseUrlBackend}/clients`;
    return this.httpClient.get<Client[]>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler('Não foi possível listar usuários'))
    );
  }

  public findById(id: number): Observable<Client> {
    return this.httpClient.get<Client>(`${environment.baseUrlBackend}/clients/${id}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler('Usuário não encontrato !'))
    )
  }

  public createdNewClient(client: Client): Observable<Client> {
    return this.httpClient.post(`${environment.baseUrlBackend}/clients`, client).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  public editClient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>(`${environment.baseUrlBackend}/clients/${client.id}`, client).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    )
  }

  public removeClient(id: number) {
    return this.httpClient.delete<Client>(`${environment.baseUrlBackend}/clients/${id}`);
  }
}


