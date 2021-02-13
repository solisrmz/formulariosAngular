import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') formulario!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    this.formulario.resetForm({
      precio: '0', 
      existencia: '0'
    });
  }

  validarNombre(){
    return this.formulario?.controls.producto?.invalid && this.formulario?.controls.producto?.touched
  }

  validarPrecio(){
    return this.formulario?.controls.precio?.touched && this.formulario?.controls.precio?.value < 0
  }

}
