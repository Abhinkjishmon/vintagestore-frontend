import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http'
import { FashionsRoutingModule } from './fashions-routing.module';
import { FashionsComponent } from './fashions.component';
import { AllFashionsComponent } from './all-fashions/all-fashions.component';
import { CartComponent } from './cart/cart.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    FashionsComponent,
    AllFashionsComponent,
    CartComponent,
    WishListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FashionsRoutingModule,
    HttpClientModule
  ]
})
export class FashionsModule { }
