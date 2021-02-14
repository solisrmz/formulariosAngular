import { Injectable } from '@angular/core';
import { AbstractControl, ControlContainer, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  nombrePattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  constructor() { }

  userName(control: FormControl): ValidationErrors | null{
    const valor = control.value?.trim();
    if(valor === 'Solis'){
      return {
        user: true
      }
    }
    return null;
  }

  camposIguales(campo1: string, campo2: string){
    return ( form: AbstractControl ): ValidationErrors | null => {
      const pass1 = form.get(campo1)?.value;
      const pass2 = form.get(campo2)?.value;
      
      if(pass1 !== pass2){
        form.get(campo2)?.setErrors({noIguales: true});
        return {
          noIguales: true
        }
      }
      form.get(campo2)?.setErrors(null);
      return null;  
    }
  }
}
