import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  miFormulario!: FormGroup;
  nuevoJuego: FormControl = this.fb.control('', Validators.required);
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.miFormulario = this.fb.group({
      nombre: ['Jose', [Validators.required, Validators.minLength(3)]], 
      favoritos: this.fb.array(
        [
          ['Zelda', Validators.required],
          ['Metal Gear', Validators.required], 
        ],Validators.required)
    })
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
    }
    console.log(this.miFormulario.value);
  }

  validar(campo: string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  get favoritos(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  agregarFavorito(){
    if(this.nuevoJuego.invalid){return;}
    this.favoritos.push( this.fb.control(this.nuevoJuego.value, Validators.required ));
    this.nuevoJuego.reset();
  }

  borrar(id: number){
    this.favoritos.removeAt(id)
  }

}
