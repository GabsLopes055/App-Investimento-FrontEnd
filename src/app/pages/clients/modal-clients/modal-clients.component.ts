import { ClientsService } from './../shared/clients.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-clients',
  templateUrl: './modal-clients.component.html',
  styleUrls: ['./modal-clients.component.css']
})
export class ModalClientsComponent {

  public formCliente: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clientService: ClientsService) {
    this.formCliente = this.buildFormCliente();
  }


  private buildFormCliente(): FormGroup {
    return this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formCliente.get(controlName)?.invalid && this.formCliente.get(controlName)?.touched)
  }

  public saveNewClient() {
    this.clientService.createdNewClient(this.formCliente.value).subscribe(() => {
      this.clientService.showMessage('Cadastrado com Sucesso !');
      this.formCliente.reset();
      location.reload();
    })
  }


}
