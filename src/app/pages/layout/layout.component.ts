import { LoginService } from './../../security/login/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private router: Router, private loginService: LoginService){}

  public logout(){
    this.loginService.removerTokenLocalStorage();
    this.router.navigate(['/login']);
  }


}
