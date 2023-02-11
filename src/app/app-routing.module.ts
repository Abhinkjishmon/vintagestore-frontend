import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FashionsRoutingModule } from './fashions/fashions-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/fashions',pathMatch:'full'},
  { path: 'fashions', loadChildren: () => import('./fashions/fashions.module').then(m => m.FashionsModule) },
  {path:'**',component:PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes),FashionsRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
