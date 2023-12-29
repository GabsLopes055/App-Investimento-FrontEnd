import { LoginService } from './login.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private loginService: LoginService, private router: Router) {
    this.formLogin = this.criarFormulario();
  }


  public criarFormulario(): FormGroup {
    return this.fb.group({
      username: ["administrator", [Validators.required, Validators.minLength(6)]],
      password: ["123456", [Validators.required, Validators.minLength(6)]]
    })
  }

  public submitForm() {
    const { username, password } = this.formLogin.value;
    this.formLogin.reset();
    this.loginService.login(username, password).subscribe(
      res => {
        this.loginService.showMessage('Login Efetuado');
        this.router.navigate(['/dashboard']);
      },
      error => {
        this.loginService.showMessage(error);
      }
    )

  }



}
