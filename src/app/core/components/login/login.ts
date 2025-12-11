import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

readonly email = new FormControl('', [Validators.required, Validators.email]);

readonly senha = new FormControl('', [Validators.required, Validators.minLength(6) ]);

  errorMessageEmail  = signal('');
  errorMessageSenha  = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageEmail());

      merge(this.senha.statusChanges, this.senha.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMenssageSenha());
  }



  updateErrorMessageEmail() {
    if (this.email.hasError('required')) {
      this.errorMessageEmail.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessageEmail.set('Not a valid email');
    } else {
      this.errorMessageEmail.set('');
    }
  }

  updateErrorMenssageSenha(){
    if (this.senha.hasError('required')){
      this.errorMessageSenha.set('Você é idiota? Coloca um valor')
    }
   else if  (this.senha.hasError('minlength')){
      this.errorMessageSenha.set('minimo 6 caracteres')
    }
   else {
      this.errorMessageSenha.set('')
    }

  }
}
