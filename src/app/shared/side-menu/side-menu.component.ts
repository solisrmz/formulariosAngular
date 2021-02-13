import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../interfaces/menu-item';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent implements OnInit {

  menu: MenuItem[] = [
    {
      texto: 'Básicos', 
      ruta: './template/basicos'
    }, 
    {
      texto: 'Dinámicos', 
      ruta: './template/dinamicos'
    }
  ]

  rectiveMenu: MenuItem[] = [
    {
      texto: 'Básicos', 
      ruta: './reactivos/basicos'
    }, 
    {
      texto: 'Dinámicos', 
      ruta: './reactivos/dinamicos'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
