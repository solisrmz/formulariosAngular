import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  miFormulario!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.miFormulario = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      precio: [null, [Validators.required, Validators.min(0)]], 
      existencias: [null, [Validators.required, Validators.min(0)]]
    })
  }

  validar(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
