import { AuthGuard } from './security/auth.guard';
import { ClientListComponent } from './pages/clients/client-list/client-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './security/login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    canActivate:[AuthGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'clients', loadChildren: () => import('./pages/clients/clients.module').then(m => m.ClientsModule) }
    ]
  },
  { path: '**', redirectTo: "" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
