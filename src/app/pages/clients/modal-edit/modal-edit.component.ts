import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from './../shared/clients.service';
import { Component, Inject } from '@angular/core';
import { ClientsModule } from '../clients.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent {

  public client!: ClientsModule;

  public formClient: FormGroup

  constructor(
    private clientService: ClientsService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private fb: FormBuilder
  ) {

    this.formClient = this.formEditClient();

  }

  private formEditClient(): FormGroup {
    return this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    })
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formClient.get(controlName)?.invalid && this.formClient.get(controlName)?.touched)
  }


  ngOnInit(): void {
    this.clientService.findById(this.data.id).subscribe((Client) => {
      this.client = Client
      // console.log(this.client)
      this.formClient.patchValue(this.client)
    })
  }

  public editClient() {
    this.clientService.editClient(this.formClient.value).subscribe((Client) => {
      this.clientService.showMessage('Cliente Editado !');
      location.reload();
    })
  }

}
