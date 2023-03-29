import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpCliente: HttpClient, private snackBar: MatSnackBar, private router: Router) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  public login(username: string, password: string): Observable<any> {

    const url = `${environment.baseUrlBackend}/login`;

    return this.httpCliente.post(url, { username, password }, { responseType: 'json' }).pipe(
      map((data) => this.setTokenLocalStorage(data)),
      catchError((error) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar Login !'
      })
    )

  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token)
  }

  public removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
    

  }

  private setTokenLocalStorage(response: any): void {
    const { type, token, __ } = response;
    localStorage.setItem(environment.token, token);
  }

}
