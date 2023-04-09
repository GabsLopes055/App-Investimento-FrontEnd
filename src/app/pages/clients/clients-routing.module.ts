import { ClientListComponent } from './client-list/client-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientViewComponent } from '../clients/client-view/client-view.component'
const routes: Routes = [

  { path: '', component: ClientListComponent },
  { path: "view/:id", component: ClientViewComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
