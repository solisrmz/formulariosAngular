import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'template', 
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  }, 
  {
    path: 'reactivos', 
    loadChildren: () => import('./reactive/reactive.module').then(m => m.ReactiveModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
