import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './core/layouts/template/template.component';

const routes: Routes = [

  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
