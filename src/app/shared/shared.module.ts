import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule, 
    RouterModule, 
  ], 
  exports: [
    SideMenuComponent
  ]
})
export class SharedModule { }
