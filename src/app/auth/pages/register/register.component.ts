import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ValidationService } from 'src/app/shared/services/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {


  miFormulario!: FormGroup;
  
  constructor(private fb: FormBuilder, private validator: ValidationService, private vs: AuthService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.validator.nombrePattern)]], 
      email: ['', [Validators.required, Validators.pattern(this.validator.emailPattern)], [this.vs.validate]], 
      username: ['', [Validators.required, this.validator.userName]], 
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]]
    }, {
      validators: [this.validator.camposIguales('password', 'password2')]
    })
  }

  validar(campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched
  }

  guardar(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  get emailError(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if( errors?.required ){
      return 'El email es obligatorio';
    }else if( errors?.pattern ){
      return 'El valor no tiene formato de correo electrónico'
    }else if( errors?.emailTomado ){
      return 'Este email ya se encuentra registrado'
    }
    return '';
  }
}
