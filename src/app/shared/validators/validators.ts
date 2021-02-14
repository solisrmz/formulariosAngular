import { FormControl } from "@angular/forms";

export const nombrePattern: string = '([a-zA-z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const userName = (control: FormControl) => {
    const valor = control.value?.trim();
    if(valor === 'Solis'){
      return {
        user: true
      }
    }
    return null;
  }