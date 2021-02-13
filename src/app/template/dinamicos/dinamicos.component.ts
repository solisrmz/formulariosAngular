import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito{
  id: number, 
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('miFormulario') formulario!: NgForm;
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Abraham', 
    favoritos: [
      {
        id: 1, 
        nombre: 'Call of Duty'
      }, 
      {
        id: 2, 
        nombre: 'Zelda'
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    
  }

  validarNombre(){
    return this.formulario?.controls.producto?.invalid && this.formulario?.controls.producto?.touched
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

  agregar(){
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push(juego);
  }

}
