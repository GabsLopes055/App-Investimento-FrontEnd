import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './security/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  },
  { path: '**', redirectTo: "" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
