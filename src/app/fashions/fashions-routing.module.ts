import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFashionsComponent } from './all-fashions/all-fashions.component';
import { CartComponent } from './cart/cart.component';
import { FashionsComponent } from './fashions.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: AllFashionsComponent },
  {path:'cart',component:CartComponent},
  {path:'wish-list',component:WishListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FashionsRoutingModule { }
