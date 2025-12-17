import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contato',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

  contatoForm = new FormGroup({

    nome: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensagem: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  onSubmit() {
    if (this.contatoForm.valid) {
      console.log('Formulário enviado:', this.contatoForm.value);
      alert('Mensagem enviada com sucesso!');
      this.contatoForm.reset();
    }else{
      alert('Por favor, preencha o formulário corretamente antes de enviar.');
    }
  }
}
